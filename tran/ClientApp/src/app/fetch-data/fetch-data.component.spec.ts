import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FetchDataComponent } from './fetch-data.component';
import {WeatherForecast} from "./weather.forecast";
import {Observable, of} from "rxjs";
import {FetchDataService} from "./fetch-data.service";

const weatherRecord: WeatherForecast = {
  date: 'date',
  temperatureC: 0,
  temperatureF: 13,
  summary: 'summary',
};


describe('FetchDataComponent', () => {
  let fixture: ComponentFixture<FetchDataComponent>;
  let component: FetchDataComponent;

  const dataServiceFactory = () => {
    let dataService: any;

    dataService = jasmine.createSpy('fetchDataService');
    dataService.getForecast = (): Observable<WeatherForecast[]> => of([weatherRecord]);

    return dataService;
  }

  const dataService = jasmine.createSpyObj('fetchDataService', ['getForecast']);
  const getForecastSpy = dataService.getForecast.and.returnValue(of([weatherRecord]));


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchDataComponent ],
      // providers: [{ provide: FetchDataService, useFactory: dataServiceFactory }]
      providers: [{ provide: FetchDataService, useValue: dataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
  });

  it('should display a title', waitForAsync(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Weather forecast');
  }));

  it ('should request async data once after component initialized', () => {
    fixture.detectChanges(); //ngOnInit
    expect(getForecastSpy).toHaveBeenCalledTimes(1);
  });

  it('should get correct async data', () => {
    fixture.detectChanges();
    expect(component.forecasts.length).toEqual(1);

    let forecast = component.forecasts[0];
    expect(forecast.temperatureF).toEqual(13);
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should display a title', waitForAsync(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter');
  }));

  it('should start with count 0, then increments by 1 when fired', waitForAsync(() => {
    const countElement = fixture.nativeElement.querySelector('#current-count');
    expect(countElement.textContent).toEqual('0');

    component.incrementCounter();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');
  }));

  it('should correctly increment value', () => {
    const initialValue = 1;
    const expectedValue = 2;

    component.currentCount = initialValue;
    expect(component.currentCount).toEqual(initialValue);

    component.incrementCounter();
    expect(component.currentCount).toEqual(expectedValue);
  })
});


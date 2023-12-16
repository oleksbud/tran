import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ManagerComponent } from './manager.component';

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title', waitForAsync(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Manager page');
  }));

  it('should have two elements show-view', waitForAsync(() => {
    const showValueEls = fixture.nativeElement.getElementsByTagName('app-show-value');
    expect(showValueEls.length).toEqual(2);
  }));
});

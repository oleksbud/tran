import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerComponent } from './clicker.component';
import {first} from "rxjs";

describe('ClickerComponent', () => {
  let component: ClickerComponent;
  let fixture: ComponentFixture<ClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire the event when clicked', () => {
    let clickedValue: string | undefined;
    component.onClick
      .pipe(first())
      .subscribe((value: string) => clickedValue = value);

    const buttonEl = fixture.nativeElement.querySelector('.clicker');
    buttonEl.click();
    expect(clickedValue).toBe('Ok');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValueComponent } from './show-value.component';

describe('ShowValueComponent', () => {
  let component: ShowValueComponent;
  let fixture: ComponentFixture<ShowValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('input value display properly', () => {
    const expectValue: string = 'new value';
    component.currentValue = expectValue;
    fixture.detectChanges();
    const elText = fixture.nativeElement.querySelector('.show-value').textContent;
    expect(elText).toEqual(expectValue);
  });
});

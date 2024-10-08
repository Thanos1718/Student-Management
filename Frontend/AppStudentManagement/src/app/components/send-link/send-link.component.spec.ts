import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLinkComponent } from './send-link.component';

describe('SendLinkComponent', () => {
  let component: SendLinkComponent;
  let fixture: ComponentFixture<SendLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

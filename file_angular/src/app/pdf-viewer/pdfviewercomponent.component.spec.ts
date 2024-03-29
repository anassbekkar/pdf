import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfviewercomponentComponent } from './pdfviewercomponent.component';

describe('PdfviewercomponentComponent', () => {
  let component: PdfviewercomponentComponent;
  let fixture: ComponentFixture<PdfviewercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfviewercomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfviewercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTextComponent } from './markdown-text.component';

describe('MarkdownTextComponent', () => {
  let component: MarkdownTextComponent;
  let fixture: ComponentFixture<MarkdownTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

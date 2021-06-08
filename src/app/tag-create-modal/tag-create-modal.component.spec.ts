import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TagCreateModalComponent } from './tag-create-modal.component';

describe('TagCreateModalComponent', () => {
  let component: TagCreateModalComponent;
  let fixture: ComponentFixture<TagCreateModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

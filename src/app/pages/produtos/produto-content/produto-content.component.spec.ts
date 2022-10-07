import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoContentComponent } from './produto-content.component';

describe('ProdutoContentComponent', () => {
  let component: ProdutoContentComponent;
  let fixture: ComponentFixture<ProdutoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

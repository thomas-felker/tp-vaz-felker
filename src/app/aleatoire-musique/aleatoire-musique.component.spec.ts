import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleatoireMusiqueComponent } from './aleatoire-musique.component';

describe('AleatoireMusiqueComponent', () => {
  let component: AleatoireMusiqueComponent;
  let fixture: ComponentFixture<AleatoireMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AleatoireMusiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AleatoireMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

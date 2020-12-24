import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductionPage } from './introduction.page';

describe('IntroductionPage', () => {
  let component: IntroductionPage;
  let fixture: ComponentFixture<IntroductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

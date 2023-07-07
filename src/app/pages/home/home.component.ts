import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public form: FormGroup = new FormGroup({
    n1: new FormControl('', [Validators.required]),
    n2: new FormControl('', [Validators.required]),
    n3: new FormControl('', [Validators.required]),
    n4: new FormControl('', [Validators.required]),
    n5: new FormControl('', [Validators.required]),
    n6: new FormControl('', [Validators.required]),
    n7: new FormControl('', [Validators.required]),
    n8: new FormControl('', [Validators.required]),
    n9: new FormControl('', [Validators.required]),
    n10: new FormControl('', [Validators.required]),
    n11: new FormControl('', [Validators.required]),
    n12: new FormControl('', [Validators.required]),
    n13: new FormControl('', [Validators.required]),
    n14: new FormControl('', [Validators.required]),
    n15: new FormControl('', [Validators.required]),
  });

  public submit(): void {
    
  }
}

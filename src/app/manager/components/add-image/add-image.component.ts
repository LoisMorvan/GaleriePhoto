import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ImagesService } from 'src/app/core/services/images.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  #createImageForm!: FormGroup;
  selectedFile!: File | undefined;

  constructor(private imagesService: ImagesService, private router: Router) { }

  get createImageForm(): FormGroup {
    return this.#createImageForm;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.#createImageForm = new FormGroup({
      id: new FormControl(uuidv4()),
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    })
  }

  public onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('id', this.createImageForm.get('id')!.value);
      formData.append('name', this.createImageForm.get('name')!.value);
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this.imagesService.createImage(formData).subscribe(
        () => this.router.navigate(['manager'])
      );
    }
  }
}

import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  baseUrl: string;
  dados: Weather;
  form: FormGroup;
  searched: boolean;
  key: string;
  erros: any;

  constructor(
    private http: HttpClient,
    private builder: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      cidade: ['', Validators.required],
    });
  }

  buscar() {
    if (this.form.valid) {
      this.appService.get(this.form.controls.cidade.value).subscribe({
        next: (data) => (this.dados = data),
        error: (err) => console.log(err),
        complete: () => this.completo(),
        // complete: () => console.log(this.dados),
      });
      this.form.reset();
    } else {
      alert('Preencha o nome da cidade');
    }
  }

  completo() {
    this.searched = true;
    console.log(this.dados);
  }
}

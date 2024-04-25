import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienteslist',
  templateUrl: './clienteslist.component.html',
  styleUrls: ['./clienteslist.component.css']
})
export class ClienteslistComponent implements OnInit {
preparaDelecao(_t23: Cliente) {
throw new Error('Method not implemented.');
}

voltarParaListagem() {
throw new Error('Method not implemented.');
}

  Clientes: Cliente[] = [];

  constructor(private service: ClientesService, private router: Router){ }

  ngOnInit(): void{
     this.service
     .getClientes()
     .subscribe( respota => this.Clientes = respota);
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form'])
    }
}

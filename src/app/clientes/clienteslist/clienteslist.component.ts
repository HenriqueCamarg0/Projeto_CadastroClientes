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

  Clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;
  
  constructor(private service: ClientesService, private router: Router){ }
  
  ngOnInit(): void{
    this.service
    .getClientes()
    .subscribe( respota => this.Clientes = respota);
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form'])
  }
  
  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }
  
  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'  
      )
  }
}


import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PesquisaAtendimentoService } from './pesquisa-atendimento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PesquisaAtendimentoModel } from './pesquisa-atendimento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pesquisaAtendimentoForm: FormGroup;

  isContentLoaded = false;  // Controle do carregamento do conteúdo

  // Variáveis de controle para habilitar/desabilitar os campos
  isBandaLargaEnabled = false;
  isLinkDedicadoEnabled = false;
  isLinhaFixaEnabled = false;
  isPabxEnabled = false;
  isSdwanEnabled = false;
  isGestaoTrafegoEnabled  = false;
  isDesktopEnabled = false;
  isNotebookEnabled = false;
  isOffice365Enabled = false;
  isGoogleWorkspaceEnabled = false;
  isCloudEnabled = false;
  isServidorEnabled = false;
  isSiteEnabled = false;
  isInstagramEnabled = false;
  isLinkedinEnabled = false;
  isEspecialistaEnabled = false;
  isDataAgendamentoEnabled = false;
  lojaId: string ='5';
  usuarioId: string = '6';
  valorTotal: number = 0;


  constructor(
    private fb: FormBuilder,
    private pesquisaAtendimentoService: PesquisaAtendimentoService,
    private snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {

    this.pesquisaAtendimentoForm = this.fb.group({

      lojaId: [this.lojaId, Validators.required],
      usuarioId: [this.usuarioId],
      valorTotal: [this.valorTotal],
      // Variables 1o Question Banda larga and Link Dedicado
      hasBandaLarga: [null, Validators.required],
      bandaLargaFornecedor: [{ value: '', disabled: true }, Validators.required],
      bandaLargaVelocidade: [{ value: '', disabled: true }, Validators.required],
      bandaLargaValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      hasLinkDedicado: [null, Validators.required],
      linkDedicadoFornecedor: [{ value: '', disabled: true }, Validators.required],
      linkDedicadoVelocidade: [{ value: '', disabled: true }, Validators.required],
      linkDedicadoValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      // Variables 2o Question (Solução de Voz) Linha Fixa e PABX
      hasLinhaFixa: [null, Validators.required],
      linhaFixaFornecedor: [{ value: '', disabled: true },Validators.required],
      linhaFixaVelocidade: [{ value: '', disabled: true },Validators.required],
      linhaFixaValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      //linhaFixaValor: [{ value: 0, disabled: true }],
      hasPabx: [null, Validators.required],
      pabxFornecedor: [{ value: '', disabled: true },Validators.required],
      pabxVelocidade: [{ value: '', disabled: true },Validators.required],
      // pabxValor: [{ value: 0, disabled: true }],
      pabxValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      // Variables 3o Question Segurança/Gestão (SDWAN and Gestão de Trafego)

      hasSdwan: [null, Validators.required],
      sdwanFornecedor: [{ value: '', disabled: true }, Validators.required],
      sdwanVelocidade: [{ value: '', disabled: true }, Validators.required],
      //sdwanValor: [{ value: 0, disabled: true }],
      sdwanValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      /** */
      hasGestaoTrafego: [null, Validators.required],
      gestaoTrafegoFornecedor: [{ value: '', disabled: true },Validators.required],
      gestaoTrafegoVelocidade: [{ value: '', disabled: true },Validators.required],
      gestaoTrafegoValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],
      //gestaoTrafegoValor: [{ value: 0, disabled: true }],

      // Variables 4o Question Locação de Maquinas (Note/PCS-Desktop/Tablet)
      hasDesktop: [null, Validators.required],
      desktopFornecedor: [{ value: '', disabled: true },Validators.required],
      desktopVelocidade: [{ value: '', disabled: true }, Validators.required],
      desktopValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],
      //      desktopValor: [{ value: 0, disabled: true }],
      /** */
      hasNotebook: [null, Validators.required],
      notebookFornecedor: [{ value: '', disabled: true }, Validators.required],
      notebookVelocidade: [{ value: '', disabled: true },Validators.required],
      notebookValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      // Variables 5o Question Office ou GoogleWorkspace
      hasOffice365: [null, Validators.required],
      office365Fornecedor: [{ value: '', disabled: true }, Validators.required],
      office365Velocidade: [{ value: '', disabled: true },Validators.required],
      office365Valor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      hasGoogleWorkspace: [null, Validators.required],
      googleWorkspaceFornecedor: [{ value: '', disabled: true }, Validators.required],
      googleWorkspaceVelocidade: [{ value: '', disabled: true },Validators.required],
      googleWorkspaceValor: [{ value: '0', disabled: true }, [Validators.required, Validators.min(1)]],

      // Variables 6o Question Armazenamento Cloud/Servidor
      hasCloud: [null, Validators.required],
      cloudFornecedor: [{ value: '', disabled: true },Validators.required],
      cloudVelocidade: [{ value: '', disabled: true },Validators.required],
      cloudValor: [{ value: '0', disabled: true }, Validators.required],
      /** */
      hasServidor: [null, Validators.required],
      servidorFornecedor: [{ value: '', disabled: true },Validators.required],
      servidorVelocidade: [{ value: '', disabled: true },Validators.required],
      servidorValor: [{ value: '0', disabled: true }, Validators.required],

      // Variables 7o Question Site e/ou redes sociais (site/instagram/Linkdn)?
      hasSite: [null, Validators.required],
      siteUrl: [{ value: '', disabled: true }, Validators.required],
      hasInstagram: [null, Validators.required],
      instagramUrl: [{ value: '', disabled: true }, Validators.required],
      hasLinkedin: [null, Validators.required],
      linkedinUrl: [{ value: '', disabled: true }, Validators.required],
      // Variables 8o  agendar uma vídeo/reunião (especialista/Data)

      hasEspecialista: [null, Validators.required],
      especialista: [{ value: null, disabled: true }, Validators.required],
      dataAgendamento: [{ value: null, disabled: true }, Validators.required],


    });
    // Assinar as mudanças de valor dos campos "valor"
    const valorFields = [
      'bandaLargaValor',
      'linkDedicadoValor',
      'linhaFixaValor',
      'pabxValor',
      'sdwanValor',
      'gestaoTrafegoValor',
      'desktopValor',
      'notebookValor',
      'office365Valor',
      'googleWorkspaceValor',
      'cloudValor',
      'servidorValor'
    ];

    valorFields.forEach(field => {
      this.pesquisaAtendimentoForm.get(field)?.valueChanges.subscribe(() => {
        this.calcularValorTotal();
      });
    });

    // Chama a função uma vez para inicializar o total
    this.calcularValorTotal();

  }




  // Função para controlar a habilitação dos campos da banda larga
  onBandaLargaChange(value: string): void {
    this.isBandaLargaEnabled = value === 'true';
    this.toggleBandaLargaFields(this.isBandaLargaEnabled);
  }

  toggleBandaLargaFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('bandaLargaFornecedor')?.enable();
      this.pesquisaAtendimentoForm.get('bandaLargaVelocidade')?.enable();
      this.pesquisaAtendimentoForm.get('bandaLargaValor')?.enable();


    } else {
      this.pesquisaAtendimentoForm.get('bandaLargaFornecedor')?.disable();
      this.pesquisaAtendimentoForm.get('bandaLargaVelocidade')?.disable();
      this.pesquisaAtendimentoForm.get('bandaLargaValor')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('bandaLargaFornecedor')?.reset();
      this.pesquisaAtendimentoForm.get('bandaLargaVelocidade')?.reset();
      this.pesquisaAtendimentoForm.get('bandaLargaValor')?.reset();
    }
  }
  // Função para controlar a habilitação dos campos do link dedicado
  onLinkDedicadoChange(value: string): void {
    this.isLinkDedicadoEnabled = value === 'true';
    this.toggleLinkDedicadoFields(this.isLinkDedicadoEnabled);
  }

  toggleLinkDedicadoFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('linkDedicadoFornecedor')?.enable();
      this.pesquisaAtendimentoForm.get('linkDedicadoVelocidade')?.enable();
      this.pesquisaAtendimentoForm.get('linkDedicadoValor')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('linkDedicadoFornecedor')?.disable();
      this.pesquisaAtendimentoForm.get('linkDedicadoVelocidade')?.disable();
      this.pesquisaAtendimentoForm.get('linkDedicadoValor')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('linkDedicadoFornecedor')?.reset();
      this.pesquisaAtendimentoForm.get('linkDedicadoVelocidade')?.reset();
      this.pesquisaAtendimentoForm.get('linkDedicadoValor')?.reset();
    }
  }

  // Função para controlar a habilitação dos campos da linha fixa
  onLinhaFixaChange(value: string): void {
    this.isLinhaFixaEnabled = value === 'true';
    this.toggleLinhaFixaFields(this.isLinhaFixaEnabled);
  }

  toggleLinhaFixaFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('linhaFixaFornecedor')?.enable();
      this.pesquisaAtendimentoForm.get('linhaFixaVelocidade')?.enable();
      this.pesquisaAtendimentoForm.get('linhaFixaValor')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('linhaFixaFornecedor')?.disable();
      this.pesquisaAtendimentoForm.get('linhaFixaVelocidade')?.disable();
      this.pesquisaAtendimentoForm.get('linhaFixaValor')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('linhaFixaFornecedor')?.reset();
      this.pesquisaAtendimentoForm.get('linhaFixaVelocidade')?.reset();
      this.pesquisaAtendimentoForm.get('linhaFixaValor')?.reset();
    }
  }

  // Função para controlar a habilitação dos campos da PABX
  onPabxChange(value: string): void {
    this.isPabxEnabled = value === 'true';
    this.togglePabxFields(this.isPabxEnabled);
  }

  togglePabxFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('pabxFornecedor')?.enable();
      this.pesquisaAtendimentoForm.get('pabxVelocidade')?.enable();
      this.pesquisaAtendimentoForm.get('pabxValor')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('pabxFornecedor')?.disable();
      this.pesquisaAtendimentoForm.get('pabxVelocidade')?.disable();
      this.pesquisaAtendimentoForm.get('pabxValor')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('pabxFornecedor')?.reset();
      this.pesquisaAtendimentoForm.get('pabxVelocidade')?.reset();
      this.pesquisaAtendimentoForm.get('pabxValor')?.reset();
    }
  }

  // Função para controlar a habilitação dos campos da SDWAN
  onSdwanChange(value: string): void {
    this.isSdwanEnabled = value === 'true';
    this.toggleSdwanFields(this.isPabxEnabled);
  }

  toggleSdwanFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('sdwanFornecedor')?.enable();
      this.pesquisaAtendimentoForm.get('sdwanVelocidade')?.enable();
      this.pesquisaAtendimentoForm.get('sdwanValor')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('sdwanFornecedor')?.disable();
      this.pesquisaAtendimentoForm.get('sdwanVelocidade')?.disable();
      this.pesquisaAtendimentoForm.get('sdwanValor')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('sdwanFornecedor')?.reset();
      this.pesquisaAtendimentoForm.get('sdwanVelocidade')?.reset();
      this.pesquisaAtendimentoForm.get('sdwanValor')?.reset();
    }
  }

  // Função para controlar a habilitação dos campos da Gestão Trafego
  onGestaoTrafegoChange(value: string): void {
    this.isGestaoTrafegoEnabled = value === 'true';
    this.toggleGestaoTrafegoFields(this.isGestaoTrafegoEnabled);
  }

  toggleGestaoTrafegoFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('gestaoTrafegoFornecedor')?.enable();
      this.pesquisaAtendimentoForm.get('gestaoTrafegoVelocidade')?.enable();
      this.pesquisaAtendimentoForm.get('gestaoTrafegoValor')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('gestaoTrafegoFornecedor')?.disable();
      this.pesquisaAtendimentoForm.get('gestaoTrafegoVelocidade')?.disable();
      this.pesquisaAtendimentoForm.get('gestaoTrafegoValor')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('gestaoTrafegoFornecedor')?.reset();
      this.pesquisaAtendimentoForm.get('gestaoTrafegoVelocidade')?.reset();
      this.pesquisaAtendimentoForm.get('gestaoTrafegoValor')?.reset();
    }
  }
  // Função para controlar a habilitação dos campos do Desktop
  onDesktopChange(value: string): void {
    this.isDesktopEnabled = value === 'true';
    this.toggleDesktopFields(this.isDesktopEnabled);
  }

  toggleDesktopFields(isEnabled: boolean): void {
  if (isEnabled) {
    this.pesquisaAtendimentoForm.get('desktopFornecedor')?.enable();
    this.pesquisaAtendimentoForm.get('desktopVelocidade')?.enable();
    this.pesquisaAtendimentoForm.get('desktopValor')?.enable();
  } else {
    this.pesquisaAtendimentoForm.get('desktopFornecedor')?.disable();
    this.pesquisaAtendimentoForm.get('desktopVelocidade')?.disable();
    this.pesquisaAtendimentoForm.get('desktopValor')?.disable();
    // Limpar os campos quando "Não" for selecionado
    this.pesquisaAtendimentoForm.get('desktopFornecedor')?.reset();
    this.pesquisaAtendimentoForm.get('desktopVelocidade')?.reset();
    this.pesquisaAtendimentoForm.get('desktopValor')?.reset();
    }
  }
 // Função para controlar a habilitação dos campos do Notebook
  onNotebookChange(value: string): void {
    this.isNotebookEnabled = value === 'true';
    this.toggleNotebookFields(this.isNotebookEnabled);
  }

  toggleNotebookFields(isEnabled: boolean): void {
  if (isEnabled) {
    this.pesquisaAtendimentoForm.get('notebookFornecedor')?.enable();
    this.pesquisaAtendimentoForm.get('notebookVelocidade')?.enable();
    this.pesquisaAtendimentoForm.get('notebookValor')?.enable();
  } else {
    this.pesquisaAtendimentoForm.get('notebookFornecedor')?.disable();
    this.pesquisaAtendimentoForm.get('notebookVelocidade')?.disable();
    this.pesquisaAtendimentoForm.get('notebookValor')?.disable();
    // Limpar os campos quando "Não" for selecionado
    this.pesquisaAtendimentoForm.get('notebookFornecedor')?.reset();
    this.pesquisaAtendimentoForm.get('notebookVelocidade')?.reset();
    this.pesquisaAtendimentoForm.get('notebookValor')?.reset();
    }
  }

  // Função para controlar a habilitação dos campos office365
  onOffice365Change(value: string): void {
    this.isOffice365Enabled = value === 'true';
    this.toggleOffice365Fields(this.isOffice365Enabled);
  }

  toggleOffice365Fields(isEnabled: boolean): void {
  if (isEnabled) {
    this.pesquisaAtendimentoForm.get('office365Fornecedor')?.enable();
    this.pesquisaAtendimentoForm.get('office365Velocidade')?.enable();
    this.pesquisaAtendimentoForm.get('office365Valor')?.enable();
  } else {
    this.pesquisaAtendimentoForm.get('office365Fornecedor')?.disable();
    this.pesquisaAtendimentoForm.get('office365Velocidade')?.disable();
    this.pesquisaAtendimentoForm.get('office365Valor')?.disable();
    // Limpar os campos quando "Não" for selecionado
    this.pesquisaAtendimentoForm.get('office365Fornecedor')?.reset();
    this.pesquisaAtendimentoForm.get('office365Velocidade')?.reset();
    this.pesquisaAtendimentoForm.get('office365Valor')?.reset();
    }
  }


  // Função para controlar a habilitação dos campos googleWorkspace
  onGoogleWorkspaceChange(value: string): void {
    this.isGoogleWorkspaceEnabled = value === 'true';
    this.toggleGoogleWorkspaceFields(this.isGoogleWorkspaceEnabled);
  }

  toggleGoogleWorkspaceFields(isEnabled: boolean): void {
  if (isEnabled) {
    this.pesquisaAtendimentoForm.get('googleWorkspaceFornecedor')?.enable();
    this.pesquisaAtendimentoForm.get('googleWorkspaceVelocidade')?.enable();
    this.pesquisaAtendimentoForm.get('googleWorkspaceValor')?.enable();
  } else {
    this.pesquisaAtendimentoForm.get('googleWorkspaceFornecedor')?.disable();
    this.pesquisaAtendimentoForm.get('googleWorkspaceVelocidade')?.disable();
    this.pesquisaAtendimentoForm.get('googleWorkspaceValor')?.disable();
    // Limpar os campos quando "Não" for selecionado
    this.pesquisaAtendimentoForm.get('googleWorkspaceFornecedor')?.reset();
    this.pesquisaAtendimentoForm.get('googleWorkspaceVelocidade')?.reset();
    this.pesquisaAtendimentoForm.get('googleWorkspaceValor')?.reset();
    }
  }

  // Função para controlar a habilitação dos campos da Cloud
  onCloudChange(value: string): void {
    this.isCloudEnabled = value === 'true';
    this.toggleCloudFields(this.isCloudEnabled);
  }

  toggleCloudFields(isEnabled: boolean): void {
  if (isEnabled) {
    this.pesquisaAtendimentoForm.get('cloudFornecedor')?.enable();
    this.pesquisaAtendimentoForm.get('cloudVelocidade')?.enable();
    this.pesquisaAtendimentoForm.get('cloudValor')?.enable();
  } else {
    this.pesquisaAtendimentoForm.get('cloudFornecedor')?.disable();
    this.pesquisaAtendimentoForm.get('cloudVelocidade')?.disable();
    this.pesquisaAtendimentoForm.get('cloudValor')?.disable();
    // Limpar os campos quando "Não" for selecionado
    this.pesquisaAtendimentoForm.get('cloudFornecedor')?.reset();
    this.pesquisaAtendimentoForm.get('cloudVelocidade')?.reset();
    this.pesquisaAtendimentoForm.get('cloudValor')?.reset();
    }
  }

   // Função para controlar a habilitação dos campos do Servidor
   onServidorChange(value: string): void {
    this.isServidorEnabled = value === 'true';
    this.toggleServidorFields(this.isServidorEnabled);
  }

  toggleServidorFields(isEnabled: boolean): void {
  if (isEnabled) {
    this.pesquisaAtendimentoForm.get('servidorFornecedor')?.enable();
    this.pesquisaAtendimentoForm.get('servidorVelocidade')?.enable();
    this.pesquisaAtendimentoForm.get('servidorValor')?.enable();
  } else {
    this.pesquisaAtendimentoForm.get('servidorFornecedor')?.disable();
    this.pesquisaAtendimentoForm.get('servidorVelocidade')?.disable();
    this.pesquisaAtendimentoForm.get('servidorValor')?.disable();
    // Limpar os campos quando "Não" for selecionado
    this.pesquisaAtendimentoForm.get('servidorFornecedor')?.reset();
    this.pesquisaAtendimentoForm.get('servidorVelocidade')?.reset();
    this.pesquisaAtendimentoForm.get('servidorValor')?.reset();
    }
  }


  // 7. Função para controlar a habilitação dos campos Site/Rede Social
  // 7.1 Site
  onSiteChange(value: string): void {
    this.isSiteEnabled = value === 'true';
    this.toggleSiteFields(this.isSiteEnabled);
  }

  toggleSiteFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('siteUrl')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('siteUrl')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('siteUrl')?.reset();
     }
  }
  // 7.2 Instagram
  onInstagramChange(value: string): void {
    this.isInstagramEnabled = value === 'true';
    this.toggleInstagramFields(this.isInstagramEnabled);
  }

  toggleInstagramFields(isEnabled: boolean): void {
    if (isEnabled) {
      this.pesquisaAtendimentoForm.get('instagramUrl')?.enable();
    } else {
      this.pesquisaAtendimentoForm.get('instagramUrl')?.disable();
      // Limpar os campos quando "Não" for selecionado
      this.pesquisaAtendimentoForm.get('instagramUrl')?.reset();
     }
  }
 // 7.3 Linkedin
 onLinkedinChange(value: string): void {
  this.isLinkedinEnabled = value === 'true';
  this.toggleLinkedinFields(this.isLinkedinEnabled);
  }

  toggleLinkedinFields(isEnabled: boolean): void {
  if (isEnabled) {
     this.pesquisaAtendimentoForm.get('linkedinUrl')?.enable();
  } else {
     this.pesquisaAtendimentoForm.get('linkedinUrl')?.disable();
     // Limpar os campos quando "Não" for selecionado
     this.pesquisaAtendimentoForm.get('linkedinUrl')?.reset();
     }
  }
  //
  // 8.1 Especialista
/*
  onEspecialistaChange(value: string): void {
  this.isEspecialistaEnabled = value === 'true';
  this.toggleEspecialistaFields(this.isEspecialistaEnabled);
  }

  toggleEspecialistaFields(isEnabled: boolean): void {
  if (isEnabled) {
     this.pesquisaAtendimentoForm.get('especialista')?.enable();
  } else {
     this.pesquisaAtendimentoForm.get('especialista')?.disable();
     // Limpar os campos quando "Não" for selecionado
     this.pesquisaAtendimentoForm.get('especialista')?.reset();
     }
  }

  onDataAgendamentoChange(value: string): void {
    this.isDataAgendamentoEnabled = value === 'true';
    this.toggleDataAgendamentoFields(this.isDataAgendamentoEnabled);
    }

    toggleDataAgendamentoFields(isEnabled: boolean): void {

      if (isEnabled) {
       this.pesquisaAtendimentoForm.get('dataAgendamento')?.enable();
    } else {
       this.pesquisaAtendimentoForm.get('dataAgendamento')?.disable();
       // Limpar os campos quando "Não" for selecionado
       this.pesquisaAtendimentoForm.get('dataAgendamento')?.reset();
    }

  }
*/
  onEspecialistaChange(value: boolean) {
    if (value === true) {
      this.isEspecialistaEnabled = true;
      this.isDataAgendamentoEnabled = true;

      // Habilita os campos e adiciona os validadores
      this.pesquisaAtendimentoForm.get('especialista').enable();
      this.pesquisaAtendimentoForm
        .get('especialista')
        .setValidators(Validators.required);
      this.pesquisaAtendimentoForm.get('dataAgendamento').enable();
      this.pesquisaAtendimentoForm
        .get('dataAgendamento')
        .setValidators(Validators.required);
    } else {
      this.isEspecialistaEnabled = false;
      this.isDataAgendamentoEnabled = false;

      // Limpa os valores dos campos
      this.pesquisaAtendimentoForm.get('especialista').setValue(null);
      this.pesquisaAtendimentoForm.get('dataAgendamento').setValue(null);

      // Desabilita os campos e remove os validadores
      this.pesquisaAtendimentoForm.get('especialista').disable();
      this.pesquisaAtendimentoForm.get('especialista').clearValidators();
      this.pesquisaAtendimentoForm.get('dataAgendamento').disable();
      this.pesquisaAtendimentoForm.get('dataAgendamento').clearValidators();
    }

    // Atualiza o estado dos validadores
    this.pesquisaAtendimentoForm.get('especialista').updateValueAndValidity();
    this.pesquisaAtendimentoForm.get('dataAgendamento').updateValueAndValidity();
  }

  // Preencher o formulário com dados aleatórios se o preenchimento automático estiver ativo



  verificarCamposInvalidos() {
    const invalidControls = [];
    const controls = this.pesquisaAtendimentoForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalidControls.push({
          nome: name,
          erros: controls[name].errors,
          valor: controls[name].value
        });
      }
    }
    console.log('Campos inválidos:', invalidControls);
  }

  calcularValorTotal(): void {
    let total = 0;

    const valorFields = [
      'bandaLargaValor',
      'linkDedicadoValor',
      'linhaFixaValor',
      'pabxValor',
      'sdwanValor',
      'gestaoTrafegoValor',
      'desktopValor',
      'notebookValor',
      'office365Valor',
      'googleWorkspaceValor',
      'cloudValor',
      'servidorValor'
    ];

    valorFields.forEach(field => {
      const control = this.pesquisaAtendimentoForm.get(field);
      if (control) {
        const value = parseFloat(control.value);
        if (!isNaN(value)) {
          total += value;
        }
      }
    });

    this.valorTotal = total;
  }

  onSubmit(): void {
    if (this.pesquisaAtendimentoForm.valid) {

      const formData= {
         ...this.pesquisaAtendimentoForm.value,
         valorTotal: this.valorTotal,

      }
         //const formData = this.pesquisaAtendimentoForm.value;

      console.log('Dados do formulário:', formData); // Verifique se lojaId está presente

      this.pesquisaAtendimentoService.salvarDados(formData).subscribe(
        response => {
          this.snackBar.open('Dados salvos com sucesso', 'Fechar', {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open('Dados inconsistentes, corrija e envie novamente.', 'Fechar', {
            duration: 3000
          });
        }
      );

    } else {
      this.pesquisaAtendimentoForm.markAllAsTouched(); // Marca todos os campos como 'touched'
      this.snackBar.open('Por favor, preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000
      });

      // Chama o método para verificar os campos inválidos
      this.verificarCamposInvalidos();
    }
  }


}

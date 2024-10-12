import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaAtendimentoComponent } from './pesquisa-atendimento.component';
import { PesquisaAtendimentoService } from './pesquisa-atendimento.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PesquisaAtendimentoComponent', () => {
  let component: PesquisaAtendimentoComponent;
  let fixture: ComponentFixture<PesquisaAtendimentoComponent>;
  let service: PesquisaAtendimentoService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [PesquisaAtendimentoComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule // Necessário para testes com Angular Material
      ],
      providers: [
        FormBuilder,
        PesquisaAtendimentoService,
        { provide: MatSnackBar, useValue: spy } // Fornecendo o Spy Object
      ]
    }).compileComponents();

    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaAtendimentoComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PesquisaAtendimentoService);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir mensagem de sucesso ao salvar dados com sucesso', () => {
    spyOn(service, 'salvarDados').and.returnValue(of({}));

    component.pesquisaAtendimentoForm.setValue({
      // Primeiro painel
      hasBandaLarga: 'true',
      bandaLargaFornecedor: 'Fornecedor Banda Larga',
      bandaLargaVelocidade: '100Mbps',
      bandaLargaValor: '200',

      hasLinkDedicado: 'true',
      linkDedicadoFornecedor: 'Fornecedor Link Dedicado',
      linkDedicadoVelocidade: '200Mbps',
      linkDedicadoValor: '500',

      // Segundo painel
      hasLinhaFixa: 'true',
      linhaFixaFornecedor: 'Fornecedor Linha Fixa',
      linhaFixaVelocidade: 'N/A',
      linhaFixaValor: '150',

      hasPabx: 'true',
      pabxFornecedor: 'Fornecedor PABX',
      pabxVelocidade: 'N/A',
      pabxValor: '300',

      // Terceiro painel
      hasSdwan: 'true',
      sdwanFornecedor: 'Fornecedor SDWAN',
      sdwanVelocidade: 'N/A',
      sdwanValor: '400',

      hasGestaoTrafego: 'true',
      gestaoTrafegoFornecedor: 'Fornecedor Gestão de Tráfego',
      gestaoTrafegoVelocidade: 'N/A',
      gestaoTrafegoValor: '350',

      // Quarto painel
      hasDesktop: 'true',
      desktopFornecedor: 'Fornecedor Desktop',
      desktopVelocidade: 'N/A',
      desktopValor: '250',

      hasNotebook: 'true',
      notebookFornecedor: 'Fornecedor Notebook',
      notebookVelocidade: 'N/A',
      notebookValor: '450',

      // Quinto painel
      hasOffice365: 'true',
      office365Fornecedor: 'Fornecedor Office 365',
      office365Velocidade: 'N/A',
      office365Valor: '50',

      hasGoogleWorkspace: 'true',
      googleWorkspaceFornecedor: 'Fornecedor Google Workspace',
      googleWorkspaceVelocidade: 'N/A',
      googleWorkspaceValor: '60',

      // Sexto painel
      hasCloud: 'true',
      cloudFornecedor: 'Fornecedor Cloud',
      cloudVelocidade: 'N/A',
      cloudValor: '600',

      hasServidor: 'true',
      servidorFornecedor: 'Fornecedor Servidor',
      servidorVelocidade: 'N/A',
      servidorValor: '700',

      // Sétimo painel
      hasSite: 'true',
      siteUrl: 'https://www.exemplo.com',

      hasInstagram: 'true',
      instagramUrl: 'https://www.instagram.com/exemplo',

      hasLinkedin: 'true',
      linkedinUrl: 'https://www.linkedin.com/company/exemplo',

      // Oitavo painel
      hasEspecialista: true,
      especialista: 'codesp1',
      dataAgendamento: new Date()
    });

    component.onSubmit();

    expect(service.salvarDados).toHaveBeenCalled();
    expect(snackBarSpy.open).toHaveBeenCalledWith('Dados salvos com sucesso', 'Fechar', {
      duration: 3000
    });
  });

  it('deve exibir mensagem de erro ao falhar ao salvar dados', () => {
    spyOn(service, 'salvarDados').and.returnValue(throwError({}));

    component.pesquisaAtendimentoForm.setValue({
      // Preencha todos os campos como no teste anterior
      // Primeiro painel
      hasBandaLarga: 'true',
      bandaLargaFornecedor: 'Fornecedor Banda Larga',
      bandaLargaVelocidade: '100Mbps',
      bandaLargaValor: '200',

      hasLinkDedicado: 'true',
      linkDedicadoFornecedor: 'Fornecedor Link Dedicado',
      linkDedicadoVelocidade: '200Mbps',
      linkDedicadoValor: '500',

      // ... (repita para todos os campos)

      // Oitavo painel
      hasEspecialista: true,
      especialista: 'codesp1',
      dataAgendamento: new Date()
    });

    component.onSubmit();

    expect(service.salvarDados).toHaveBeenCalled();
    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'Dados inconsistentes, corrija e envie novamente.',
      'Fechar',
      { duration: 3000 }
    );
  });

  it('não deve chamar o serviço se o formulário for inválido', () => {
    spyOn(service, 'salvarDados');

    component.pesquisaAtendimentoForm.setValue({
      // Deixe alguns campos obrigatórios vazios para simular um formulário inválido
      hasBandaLarga: '',
      bandaLargaFornecedor: '',
      bandaLargaVelocidade: '',
      bandaLargaValor: '',

      hasLinkDedicado: '',
      linkDedicadoFornecedor: '',
      linkDedicadoVelocidade: '',
      linkDedicadoValor: '',

      // ... (repita para todos os campos)

      // Oitavo painel
      hasEspecialista: '',
      especialista: '',
      dataAgendamento: ''
    });

    component.onSubmit();

    expect(service.salvarDados).not.toHaveBeenCalled();
    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'Por favor, preencha todos os campos obrigatórios.',
      'Fechar',
      { duration: 3000 }
    );
  });

  // Você pode adicionar mais testes para cobrir outros cenários, se necessário
});

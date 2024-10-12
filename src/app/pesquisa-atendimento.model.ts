export interface PesquisaAtendimentoModel {
  // Primeiro painel
  hasBandaLarga: boolean;
  bandaLargaFornecedor?: string;
  bandaLargaVelocidade?: string;
  bandaLargaValor?: number;

  hasLinkDedicado: boolean;
  linkDedicadoFornecedor?: string;
  linkDedicadoVelocidade?: string;
  linkDedicadoValor?: number;

  // Segundo painel
  hasLinhaFixa: boolean;
  linhaFixaFornecedor?: string;
  linhaFixaVelocidade?: string;
  linhaFixaValor?: number;

  hasPabx: boolean;
  pabxFornecedor?: string;
  pabxVelocidade?: string;
  pabxValor?: number;

  // Terceiro painel
  hasSdwan: boolean;
  sdwanFornecedor?: string;
  sdwanVelocidade?: string;
  sdwanValor?: number;

  hasGestaoTrafego: boolean;
  gestaoTrafegoFornecedor?: string;
  gestaoTrafegoVelocidade?: string;
  gestaoTrafegoValor?: number;

  // Quarto painel
  hasDesktop: boolean;
  desktopFornecedor?: string;
  desktopVelocidade?: string;
  desktopValor?: number;

  hasNotebook: boolean;
  notebookFornecedor?: string;
  notebookVelocidade?: string;
  notebookValor?: number;

  // Quinto painel
  hasOffice365: boolean;
  office365Fornecedor?: string;
  office365Velocidade?: string;
  office365Valor?: number;

  hasGoogleWorkspace: boolean;
  googleWorkspaceFornecedor?: string;
  googleWorkspaceVelocidade?: string;
  googleWorkspaceValor?: number;

  // Sexto painel
  hasCloud: boolean;
  cloudFornecedor?: string;
  cloudVelocidade?: string;
  cloudValor?: number;

  hasServidor: boolean;
  servidorFornecedor?: string;
  servidorVelocidade?: string;
  servidorValor?: number;

  // Sétimo painel
  hasSite: boolean;
  siteUrl?: string;

  hasInstagram: boolean;
  instagramUrl?: string;

  hasLinkedin: boolean;
  linkedinUrl?: string;

  // Oitavo painel
  hasEspecialista: boolean;
  especialista?: string;
  dataAgendamento?: Date;
  //
  lojaId?: number;
  usuarioId?: number;
  //
  valorTotal: number;
}

import { randomUUID } from "node:crypto"

interface SchemaZipCode {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  unidade?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  estado?: string;
  regiao?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

export class ZipCode {

  private _id: string;
  private props: SchemaZipCode;

  constructor(
    props: SchemaZipCode,
    id?: string
  ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props
    }
  }

  get Id(): string {
    return this._id
  }

  get Cep(): string | null | undefined {
    return this.props.cep
  }

  get Logradouro(): string | null | undefined {
    return this.props.logradouro
  }
  get Complemento(): string | null | undefined {
    return this.props.complemento
  }
  get Unidade(): string | null | undefined {
    return this.props.unidade
  }
  get Bairro(): string | null | undefined {
    return this.props.bairro
  }
  get Localidade(): string | null | undefined {
    return this.props.localidade
  }
  get Uf(): string | null | undefined {
    return this.props.uf
  }
  get Estado(): string | null | undefined {
    return this.props.estado
  }
  get Regiao(): string | null | undefined {
    return this.props.regiao
  }
  get Ibge(): string | null | undefined {
    return this.props.ibge
  }
  get Gia(): string | null | undefined {
    return this.props.gia
  }
  get Ddd(): string | null | undefined {
    return this.props.ddd
  }
  get Siafi(): string | null | undefined {
    return this.props.siafi
  }

  set Cep(cep: string) {
    this.props.cep = cep
  }

  set Logradouro(logradouro: string) {
    this.props.logradouro = logradouro
  }
  set Complemento(complemento: string) {
    this.props.complemento = complemento
  }
  set Unidade(unidade: string) {
    this.props.unidade = unidade
  }
  set Bairro(bairro: string) {
    this.props.bairro = bairro
  }
  set Localidade(localidade: string) {
    this.props.localidade = localidade
  }
  set Uf(uf: string) {
    this.props.uf = uf
  }
  set Estado(estado: string) {
    this.props.estado = estado
  }
  set Regiao(regiao: string) {
    this.props.regiao = regiao
  }
  set Ibge(ibge: string) {
    this.props.ibge = ibge
  }
  set Gia(gia: string) {
    this.props.gia = gia
  }
  set Ddd(ddd: string) {
    this.props.ddd = ddd
  }
  set Siafi(siafi: string) {
    this.props.siafi = siafi
  }
}
import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationMethod, ID, Product, RequestContext, TransactionalConnection, User } from '@vendure/core';
import { SERVIENTREGA_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';
import axios from 'axios';
import https from 'node:https';

@Injectable()
export class Servientrega {
    constructor(private connection: TransactionalConnection, @Inject(SERVIENTREGA_PLUGIN_OPTIONS) private options: PluginInitOptions) { }

    async exampleMethod(ctx: RequestContext, id: ID) {
        // Add your method logic here
        const result = await this.connection.getRepository(ctx, Product).findOne({ where: { id } });
        return result;
    }

    async getCitiesDepartament(ctx: RequestContext, args: { countryId: number, language: string }): Promise<any> {
        const url = this.options.url;
        const countryId = args.countryId;
        const language = args.language;
        const urlw = `${url}/Cotizador/CiudadesDepartamento/${countryId}/${language}`
        const agent = new https.Agent({ rejectUnauthorized: false });
        const { data } = await axios.get(urlw, {
            headers: { Accept: "application/json" },
            httpsAgent: agent
        });
        return data;
    }

    async getCitiesOrigin(ctx: RequestContext, args: { countryId: number, productID: number, language: string }): Promise<any> {
        const url = this.options.url;
        const countryId = args.countryId;
        const productID = args.productID;
        const language = args.language;
        const urlw = `${url}/Cotizador/CiudadesOrigen/${countryId}/${productID}/${language}`
        console.log(urlw)
        const agent = new https.Agent({ rejectUnauthorized: false });
        const { data } = await axios.get(urlw, {
            headers: { Accept: "application/json" },
            timeout: 15000,
            httpsAgent: agent
        });
        return data;
    }

    async getCitiesAutocompleteOrigin(ctx: RequestContext, args: { countryId: number, productID: number, language: string, cityName?: string }): Promise<any> {
        const url = this.options.url;
        const countryId = args.countryId;
        const productID = args.productID;
        const language = args.language;
        const cityName = args.cityName;
        let urlw = '';
        if (cityName) {
            urlw = `${url}/Cotizador/CiudadesAutocompleteOrigen/${countryId}/${productID}/${language}/${cityName}`
        }
        else {
            urlw = `${url}/Cotizador/CiudadesAutocompleteOrigen/${countryId}/${productID}/${language}`
        }
        console.log(urlw)
        const agent = new https.Agent({ rejectUnauthorized: false });
        const { data } = await axios.get(urlw, {
            headers: { Accept: "application/json" },
            timeout: 15000,
            httpsAgent: agent
        });
        return data;
    }

    async getQuote(ctx: RequestContext, arg: { originCityId: number, destinationCityId: number, largoCm: number, altoCm: number, anchoCm: number, pesoKg: number, valorDeclaradoCOP: number, productId: number, language: string }): Promise<any> {
        const base = this.options.url;

        const o = Number(arg.originCityId);
        const d = Number(arg.destinationCityId);
        const L = Number(arg.largoCm);
        const A = Number(arg.altoCm);
        const W = Number(arg.anchoCm);
        const P = Number(arg.pesoKg);
        const V = Number(arg.valorDeclaradoCOP);
        const pr = Number(arg.productId);
        const lang = String(arg.language ?? "es");

        const urlw = `${base}/Cotizador/Tarifas/${o}/${d}/${L}/${A}/${W}/${P}/${V}/${pr}/${lang}`;

        const agent = new https.Agent({ rejectUnauthorized: false });

        const { data } = await axios.get(urlw, {
            headers: { Accept: "application/json" },
            timeout: 15000,
            httpsAgent: agent
        });

        return data;
    }

    async getRestrictions(ctx: RequestContext): Promise<any> {
        const url = this.options.url;
        const countryId = 267;
        const productId = 6;
        const filialId = 1;
        const subProductId = 1;
        const language = 'es';
        const urlw = `${url}/Cotizador/Restricciones/${countryId}/${productId}/${filialId}/${subProductId}/${language}`;
        const agent = new https.Agent({ rejectUnauthorized: false });

        const { data } = await axios.get(urlw, {
            headers: { Accept: 'application/json' },
            httpsAgent: agent,
        });
        return data;
    }

    async getNetworkRestrictions(args: {
        paisOrigen: number, ciudadOrigen: number, paisDestino: number, ciudadDestino: number,
        productId: number, peso: number, largo: number, alto: number, ancho: number
    }) {
        const base = this.options.url;
        const urlw = `${base}/Cotizador/restriccionesRedOperativa/${args.paisOrigen}/${args.ciudadOrigen}/${args.paisDestino}/${args.ciudadDestino}/${args.productId}/${args.peso}/${args.largo}/${args.alto}/${args.ancho}`;
        const agent = new https.Agent({ rejectUnauthorized: false });
        const { data } = await axios.get(urlw, { headers: { Accept: 'application/json' }, timeout: 15000, httpsAgent: agent });
        return data;
    }

    async servientregaProducts(ctx: RequestContext): Promise<any> {
        const base = this.options.url;
        const urlw = `https://app.servientrega.com/co/rest/locations/v1.0/api/Productos/1`;
        const agent = new https.Agent({ rejectUnauthorized: false });
        const { data } = await axios.get(urlw, { headers: { Accept: 'application/json' }, timeout: 15000, httpsAgent: agent });
        return data;
    }
}
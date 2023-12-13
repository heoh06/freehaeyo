import { http, HttpResponse } from 'msw';

import mockCompanyData from '../MockData/CompanyData.json';
import mockHireData from '../MockData/HireData.json';
import mockUserData from '../MockData/UserData.json';
import mockHireTagData from '../MockData/HireTagData.json';

export const handlers = [
  // get요청
  http.get('/hire', () => {
    return HttpResponse.json(mockHireData);
  }),

  http.get('/hire/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json(mockHireData[id]);
  }),

  http.get('/hiretag', () => {
    return HttpResponse.json(mockHireTagData);
  }),

  http.get('/userinfo', () => {
    return HttpResponse.json(mockUserData);
  }),

  http.get('/companyinfo', () => {
    return HttpResponse.json(mockCompanyData);
  }),

  //   http.get('/company', async (req, res, ctx) => {
  //     return res(ctx.status(200), ctx.json(mockCompanyData));
  //   }),
  //   http.get('/hire', async (req, res, ctx) => {
  //     return res(ctx.status(200), ctx.json(mockHireData));
  //   }),
  //   http.get('/hire/:id', async (req, res, ctx, params) => {
  //     const { id } = params;
  //     return res(ctx.status(200), ctx.json(mockHireData[id]));
  //   }),
  //   http.get('/userinfo', async (req, res, ctx) => {
  //     return res(ctx.status(200), ctx.json(mockUserData));
  //   }),
  //   http.get('/userinfo/:id', async (req, res, ctx, params) => {
  //     const { id } = params;
  //     return res(ctx.status(200), ctx.json(mockUserData[id]));
  //   }),
  //   http.get('/hiretag', async (req, res, ctx) => {
  //     return res(ctx.status(200), ctx.json(mockHireTagData));
  //   }),

  //   //   post요청
  //   http.post('/hire', async (req, res, ctx) => {
  //     mockHireData.push(req.body);
  //     return res(ctx.status(201), ctx.json(mockHireData));
  //   }),
  //   http.post('/hire/:id', async (req, res, ctx, params) => {
  //     const { id } = params;
  //     mockHireData[id].push(req.body);
  //     return res(ctx.status(201), ctx.json(mockHireData));
  //   }),
];

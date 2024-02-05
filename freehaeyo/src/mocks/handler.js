import { http, HttpResponse } from 'msw';

import mockCompanyData from '../MockData/CompanyData.json';
import mockHireData from '../MockData/HireData.json';
import mockUserData from '../MockData/UserData.json';
import mockHireTagData from '../MockData/HireTagData.json';

export const handlers = [
  // get요청
  http.get('/hire', () => HttpResponse.json(mockHireData)),

  http.get('/hire/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json(mockHireData[id]);
  }),

  http.get('/hiretag', () => HttpResponse.json(mockHireTagData)),

  http.get('/userinfo', () => HttpResponse.json(mockUserData)),

  http.get('/companyinfo', () => HttpResponse.json(mockCompanyData)),

  // post요청
  http.post('/userinfo', async ({ request }) => {
    const jsonfiedUser = await request.json();

    const newUserData = {
      id: mockUserData.length + 1,
      ...jsonfiedUser,
    };

    // Todo:나중에 localStorage로 변환 시키기
    mockUserData.push(newUserData);

    return HttpResponse.json({ message: '회원가입 성공', user: newUserData });
  }),
];

export default handlers;

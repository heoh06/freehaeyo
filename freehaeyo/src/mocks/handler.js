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

  // post요청
  http.post('/userinfo', async ({ request }) => {
    const { name, email, password, phone, stack, resume } =
      await request.json();

    const newUser = {
      id: mockUserData.length + 1,
      name,
      email,
      password,
      phone,
      stack,
      resume,
    };

    mockUserData.push(newUser);
    return HttpResponse.json({ message: '회원가입 성공', user: newUser });
  }),
];

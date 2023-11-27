const mockedLinkData: Link = {
  id: 1,
  code: 'nkAaNcZeVA',
  value: 'https://itomych.atlassian.net/',
  purpose: 'Jira',
  is_active: true,
  company: {
    name: 'Safety-Link Company',
    website: null,
  },
  author: {
    email: 'safetylink@itomy.ch',
    first_name: '',
    last_name: '',
  },
  datetime_created: '2023-04-19T13:09:57.471059Z',
};

const rows = Array.from({ length: 100 }, (v, i) => ({
  ...mockedLinkData,
  id: i + 1,
}));

export { rows };

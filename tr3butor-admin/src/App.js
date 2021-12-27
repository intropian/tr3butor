import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { blogArticleEntity } from './components/BlogArticle/blogArticleEntity';
import { daoEntity } from './components/Dao/daoEntity';
import { daoBountyEntity } from './components/DaoBounty/daoBountyEntity';
import { daoEventEntity } from './components/DaoEvent/daoEventEntity';
import { daoGrantEntity } from './components/DaoGrant/daoGrantEntity';
import { daoHackathonEntity } from './components/DaoHackathon/daoHackathonEntity';
import { daoQuestEntity } from './components/DaoQuest/daoQuestEntity';
import { daoTemplateEntity } from './components/DaoTemplate/daoTemplateEntity';
import { talentEntity } from './components/Talent/talentEntity';
import { userEntity } from './components/User/userEntity';

import { ResourceCreateFn, ResourceEditFn, ResourceListFn, ResourceShowFn } from './components/generalizedResourceElements';
import { DaoJobCreate, DaoJobEdit, DaoJobList, DaoJobShow} from './components/DaoJob';


function App() {
  const dataProvider = crudProvider('http://localhost:3001'); // 'https://tr3butor.selin.in.ua/api/';
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="blog-article" list={ResourceListFn(blogArticleEntity)} create={ResourceCreateFn(blogArticleEntity)} edit={ResourceEditFn(blogArticleEntity)} show={ResourceShowFn(blogArticleEntity)} />
        <Resource name="dao" list={ResourceListFn(daoEntity)} create={ResourceCreateFn(daoEntity)} edit={ResourceEditFn(daoEntity)} show={ResourceShowFn(daoEntity)} />
        <Resource name="dao-bounty" list={ResourceListFn(daoBountyEntity)} create={ResourceCreateFn(daoBountyEntity)} edit={ResourceEditFn(daoBountyEntity)} show={ResourceShowFn(daoBountyEntity)} />
        <Resource name="dao-event" list={ResourceListFn(daoEventEntity)} create={ResourceCreateFn(daoEventEntity)} edit={ResourceEditFn(daoEventEntity)} show={ResourceShowFn(daoEventEntity)} />
        <Resource name="dao-grant" list={ResourceListFn(daoGrantEntity)} create={ResourceCreateFn(daoGrantEntity)} edit={ResourceEditFn(daoGrantEntity)} show={ResourceShowFn(daoGrantEntity)} />
        <Resource name="dao-hackathon" list={ResourceListFn(daoHackathonEntity)} create={ResourceCreateFn(daoHackathonEntity)} edit={ResourceEditFn(daoHackathonEntity)} show={ResourceShowFn(daoHackathonEntity)} />
        <Resource name="dao-job" list={DaoJobList} create={DaoJobCreate} edit={DaoJobEdit} show={DaoJobShow} />
        <Resource name="dao-quest" list={ResourceListFn(daoQuestEntity)} create={ResourceCreateFn(daoQuestEntity)} edit={ResourceEditFn(daoQuestEntity)} show={ResourceShowFn(daoQuestEntity)} />
        <Resource name="dao-template" list={ResourceListFn(daoTemplateEntity)} create={ResourceCreateFn(daoTemplateEntity)} edit={ResourceEditFn(daoTemplateEntity)} show={ResourceShowFn(daoTemplateEntity)} />
        <Resource name="talent" list={ResourceListFn(talentEntity)} create={ResourceCreateFn(talentEntity)} edit={ResourceEditFn(talentEntity)} show={ResourceShowFn(talentEntity)} />
        <Resource name="user" list={ResourceListFn(userEntity)} create={ResourceCreateFn(userEntity)} edit={ResourceEditFn(userEntity)} show={ResourceShowFn(userEntity)} />
      </Admin>
    </div>
  );
}

export default App;

// https://github.com/FusionWorks/react-admin-nestjsx-crud-dataprovider
// https://medium.com/fusionworks/creating-admin-like-web-applications-with-nestjs-and-react-admin-part-1-9aab84d970df
// https://medium.com/fusionworks/creating-admin-like-web-applications-with-nestjs-and-react-admin-part-2-57da53300300

// https://marmelab.com/react-admin/Fields.html

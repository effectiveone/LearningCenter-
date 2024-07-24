import React, { useEffect, useState } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';
import buildGraphQLProvider from './data-provider/graphqlDataProvider';
import { theme } from './theme/theme';
import Login from './Login';
import './App.scss';
import Dashboard from './pages/Dashboard';
import { LanguageList } from './language/LanguageList';
import { LanguageCreate } from './language/LanguageCreate';
import { LanguageEdit } from './language/LanguageEdit';
import { LanguageShow } from './language/LanguageShow';
import { CategoryList } from './category/CategoryList';
import { CategoryCreate } from './category/CategoryCreate';
import { CategoryEdit } from './category/CategoryEdit';
import { CategoryShow } from './category/CategoryShow';
import { LevelList } from './level/LevelList';
import { LevelCreate } from './level/LevelCreate';
import { LevelEdit } from './level/LevelEdit';
import { LevelShow } from './level/LevelShow';
import { UserSetList } from './userSet/UserSetList';
import { UserSetCreate } from './userSet/UserSetCreate';
import { UserSetEdit } from './userSet/UserSetEdit';
import { UserSetShow } from './userSet/UserSetShow';
import { FlashcardList } from './flashcard/FlashcardList';
import { FlashcardCreate } from './flashcard/FlashcardCreate';
import { FlashcardEdit } from './flashcard/FlashcardEdit';
import { FlashcardShow } from './flashcard/FlashcardShow';
import { UserProgressList } from './userProgress/UserProgressList';
import { UserProgressCreate } from './userProgress/UserProgressCreate';
import { UserProgressEdit } from './userProgress/UserProgressEdit';
import { UserProgressShow } from './userProgress/UserProgressShow';
import { UserList } from './user/UserList';
import { UserCreate } from './user/UserCreate';
import { UserEdit } from './user/UserEdit';
import { UserShow } from './user/UserShow';
import { jwtAuthProvider } from './auth-provider/ra-auth-jwt';

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  console.log('dataProvider', dataProvider);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className='App'>
      <Admin
        title={'FlashcardApp'}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name='Language'
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name='Category'
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name='Level'
          list={LevelList}
          edit={LevelEdit}
          create={LevelCreate}
          show={LevelShow}
        />
        <Resource
          name='UserSet'
          list={UserSetList}
          edit={UserSetEdit}
          create={UserSetCreate}
          show={UserSetShow}
        />
        <Resource
          name='Flashcard'
          list={FlashcardList}
          edit={FlashcardEdit}
          create={FlashcardCreate}
          show={FlashcardShow}
        />
        <Resource
          name='UserProgress'
          list={UserProgressList}
          edit={UserProgressEdit}
          create={UserProgressCreate}
          show={UserProgressShow}
        />
        <Resource
          name='User'
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

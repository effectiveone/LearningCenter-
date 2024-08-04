import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import LanguageLearningGrid from '../Components/LanguageLearningGrid';

const Dashboard = ({ jwtAuthProvider }: any) => {
  console.log('jwtAuthProvider', jwtAuthProvider);
  return (
    <Card>
      <Title title='Welcome to the administration' />
      <CardContent>Welcome</CardContent>
      <LanguageLearningGrid />
    </Card>
  );
};

export default Dashboard;

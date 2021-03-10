import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '@/lib/firebase';

// Components
const Top = React.lazy(() => import('@/components/Pages/Top'));

const Routes: React.FC = () => {
  const [user, initialising, error] = useAuthState(firebaseAuth);

  if (initialising) {
    return <div>画面の準備中・・・</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/" component={Top} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
import { User } from 'components/profile/Profile';
import { Data } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import { Transactions } from 'components/Transactions/Transactions'
import transactions from 'json/transactions.json';
import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        
      }}
    >
      <User profile={user}/>
      <Data title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      {/* <Transactions/> */}
    </div>
  );
};

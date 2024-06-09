import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Stat } from './Stat/Stat';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { FriendList } from './FriendsList/FriendsList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stat title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

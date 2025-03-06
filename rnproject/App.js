
import { View } from 'react-native';
import Table from './Table';
import Form from './Form';
import Favourites from './Favourites';
import Chat from './Chat';
import People from './People';
import Earn from './Earn';
import Client from './Client';
import Message from './Message';
import Pending from './Pending';
import Bids from './Bids';
import Slide from './Slide';
import Orderlist from './Orderlist';
import PracticeCrud from './PracticeCrud';
import Crudstr from './Crudstr';
import Search from './Search';
import Searchapi from './Searchapi';
import Searchfilter from './Searchfilter';
import Test from './Test';
import Addapi from './Addapi';
import Budget from './Budget';
import Validation from './Validation';
import TabLayout from './TabLayout';
import Goal from './goal/Goal';
import Checkbox from './Checkbox';
import Radio from './Radio';
import NavComponent from './navigation/NavComponent';
import Team from './card/Team';
import AddSkills from './AddSkills';
import Pracvalidate from './Pracvalidate';
import Home from './login/Home';
import { Provider } from 'react-redux';
import { store } from './api/store';


export default function App() {
  return (
    <View style={{flex:1}}>
    {/* <Table/> */}
    {/* <Form/> */}
    {/* <Favourites/> */}
    {/* <Chat/> */}
    {/* <People/> */}
    {/* <Earn/> */}
    {/* <Client/> */}
    {/* <Message/> */}
    {/* <Pending/> */}
    {/* <Bids/> */}
    {/* <Slide/> */}
    {/* <Orderlist/> */}
    {/* <PracticeCrud/> */}
    {/* <Crudstr/> */}
    {/* <Search/> */}
    {/* <Searchapi/> */}
    {/* <Searchfilter/> */}
    {/* <Test/> */}
    {/* <Addapi/> */}
    {/* <Budget/> */}
    {/* <Validation/> */}
    {/* <TabLayout/> */}
    {/* <Goal/> */}
    {/* <Checkbox/> */}
    {/* <Radio/> */}
    {/* <NavComponent/> */}
    {/* <Team/> */}
    {/* <AddSkills/> */}
    {/* <Pracvalidate/> */}
    <Provider store={store}>
      <Home/>
    </Provider>
    </View>
  );
}



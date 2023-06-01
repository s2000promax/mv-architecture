import { CounterTwoView } from './modules/counterTwo/CounterTwoView';
import { UsersView } from './modules/users/UsersView';
import { UsersController } from './modules/users/UsersController';
import { UsersModel } from './modules/users/UsersModel';

const counterView = new CounterTwoView(document.getElementById('counter1')!);
const counterView1 = new CounterTwoView(document.getElementById('counter2')!);
const counterView2 = new CounterTwoView(document.getElementById('counter3')!);

counterView.mount();
counterView1.mount();
counterView2.mount();


const usersModel = new UsersModel();
const usersController = new UsersController(usersModel);

const usersView = new UsersView(
  document.getElementById('users')!,
  usersController
);

usersView.mount();

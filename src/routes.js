import Home from "@/components/Home";
import Contacts from "@/components/Contacts";
import MyStudying from "@/components/MyStudying";
import UnknownPage from "@/components/UnknownPage";
import ListStart from "@/components/studying/ListStart";
import Program from "@/components/studying/Program";
import Learned from "@/components/studying/Learned";
import Calculator from "@/components/studying/Calculator";
import General from "@/components/studying/todo_done_lists/General";

export const routes = [
    {path: '', component: Home, name: 'Home'},       
    {path: '/Contacts', component: Contacts, name: 'Contacts'},
    {path: '/MyStudying', component: MyStudying, name: 'MyStudying', children: [
        {path: '', component: ListStart, name: 'ListStart'},
        {path: '/MyStudying/program', component: Program, name: 'Program'},
        {path: '/MyStudying/learned', component: Learned, name: 'Learned'},
        {path: '/MyStudying/calculator', component: Calculator, name: 'Calculator'},
        {path: '/MyStudying/todo_done_lists', component: General, name: 'TodoDoneLists'}
    ]},
    {path: '*', component: UnknownPage, name: 'UnknownPage'}
]






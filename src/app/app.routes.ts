import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Photos } from './components/photos/photos';
import { Events } from './components/events/events';
import { Videos } from './components/videos/videos';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'photos', component: Photos},
    {path: 'events', component: Events},
    {path: 'videos', component: Videos},
    {path: 'contact', component: Contact},
];

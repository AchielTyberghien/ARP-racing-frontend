import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LibraryComponent } from './pages/library/library.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArchiveComponent } from './pages/archive/archive.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: HomeComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'portfolio',
    component: PortfolioComponent
},
{
    path: 'library',
    component: LibraryComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'archive/:id',
    component: ArchiveComponent
}
];

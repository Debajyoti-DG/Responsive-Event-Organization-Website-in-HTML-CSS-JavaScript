 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import { NotesPage } from './Components/Pages/NotesPage';
 import { NoteDetailPage } from './Components/Pages/NoteDetailPage';
 import { NotFoundPage } from './Components/Pages/NotFoundPage';

 export const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <NotesPage />
                </Route>
                <Route path='/notes/:noteId'>
                    <NoteDetailPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Routes>
        </Router>
    );
 }

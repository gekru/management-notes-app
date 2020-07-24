import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  myApiUrl: string;
  notesUrl: string;


  constructor(private http: HttpClient) {
    this.myApiUrl = environment.apiUrl;
    this.notesUrl = 'api/notes/';
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getNotes() {
    return this.http.get(this.myApiUrl + this.notesUrl);
  }

  getNote(id: number) {
    return this.http.get(this.myApiUrl + this.notesUrl + id);
  }

  createNote(note: Note) {
    return this.http.post(this.myApiUrl + this.notesUrl, note);
  }
  updateNote(note: Note) {

    return this.http.put(this.myApiUrl + this.notesUrl, note);
  }
  deleteNote(id: number) {
    return this.http.delete(this.myApiUrl + this.notesUrl + id);
  }
}

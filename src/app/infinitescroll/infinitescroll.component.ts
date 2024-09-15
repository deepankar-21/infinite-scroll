import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.component.html',
  styleUrls: ['./infinitescroll.component.css']
})
export class InfinitescrollComponent {
  items: any[] = []; // Data to render
  page = 0; // Track the current page
  imageCount = 200;
  limit = 20; // Items per API request (can be customized)
  totalItems = 5000; // Total number of items available
  loading = false; // Loading state to manage the spinner
  name$: Observable<string>;
  flag:boolean = false;
  data :any;

  constructor(private http: HttpClient,private store: Store<{ name: string }>) {
    this.name$ = this.store.select('name');
    let ls = localStorage.getItem("user");
    if(ls == ''){
      this.name$.subscribe((n)=>{
        localStorage.setItem("user",n);
        this.flag = true;
      })
    }else{
    this.data = localStorage.getItem("user");
    }
    console.log(localStorage)
  }

  ngOnInit(): void {
    this.fetchData(); // Load the first set of data
  }
// Fetch data from the API
fetchData(): void {
  if (this.items.length >= this.totalItems) return; // Stop if all items are fetched

  this.loading = true;
 

  // Replace this URL with your actual API endpoint with pagination support
  this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos?_start=${this.page}&_limit=${this.limit}`)
    .subscribe((newData) => {
      for(let i=0;i<newData.length;i++){
        newData[i]['url'] = `https://picsum.photos/${this.imageCount}`; //Add Image Url
        this.imageCount++;
      }
      this.items = [...this.items, ...newData]; // Append new data to existing items
      this.page = this.page+this.limit;
      this.loading = false;
    });
}

// Detect scroll event and fetch more data if we reach the bottom
onScroll(event: any): void {
  const scrollTop = event.target.scrollTop;
  const scrollHeight = event.target.scrollHeight;
  const clientHeight = event.target.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 100 && !this.loading) {
    this.fetchData(); // Load more data when scrolled near the bottom
  }
}


}

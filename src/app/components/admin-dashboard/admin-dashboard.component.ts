import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  constructor(public dialog: MatDialog){}


  ngOnInit(): void {
  }

//   getLatestMovie(){
//     this.dataService.getLatestMovie().subscribe(
//       res => {
//         this.checkData(res);
//         this.latestMovie = res;
//         console.log(this.latestMovie?.backdrop_path);
//       }, err => {
//         console.log("Oops! Failed to get latest Movie.", err);
//       }
//     )
//   }

//   // checking backdrop path for latest movie (i.e the image souce path), if it doesnt exist initialize it with poster path
//   checkData(res: any) : any{
//     if(!res.backdrop_path){
//       res.backdrop_path = 'https://image.tmdb/org/t/p/original'+res.poster_path+'?api_key='+DataService.api_key;
//     }else{
//       res.backdrop_path = 'https://image.tmdb/org/t/p/original'+res.backdrop_path+'?api_key='+DataService.api_key;
//     }
//   }
// // get now playing movie from dataservice
//   getNowPlayingMovies(){
//     this.dataService.getNowPlayingMovies().subscribe(
//       res => {
//         this.nowPlayingMovies = this.modifyData(res);
//       }, err => {
//         console.log("Failed to fetch Now Playing Movies.", err);
//       }
//     )
//   }
// // get trending movie from dataservice
//   getTrendingMovies(){
//     this.dataService.getTrendingMovies().subscribe(
//       res => {
//         this.trendingMovies = this.modifyData(res);
//       }, err => {
//         console.log("Failed to fetch Trending Movies.", err);
//       }
//     )
//   }
// // get popular movie from dataservice
//   getPopularMovies(){
//     this.dataService.getPopularMovies().subscribe(
//       res => {
//         this.popularMovies = this.modifyData(res);
//         console.log("HI this is the Popular : "+this.popularMovies);
//       }, err => {
//         console.log("Failed to fetch Popular Movies.", err);
//       }
//     )
//   }
// // get top-rated movie from dataservice
//   getTopRatedMovies(){
//     this.dataService.getTopRatedMovies().subscribe(
//       res => {
//         this.topRatedMovies = this.modifyData(res);
//       }, err => {
//         console.log("Failed to fetch Top-Rated Movies.", err);
//       }
//     )
//   }
// // get upcoming movie from dataservice
//   getUpcomingMovies(){
//     this.dataService.getUpcomingMovies().subscribe(
//       res => {
//         this.upcomingMovies = this.modifyData(res);
//       }, err => {
//         console.log("Failed to fetch Upcoming Movies.", err);
//       }
//     )
//   }
// // get originals from dataservice
//   getOriginals(){
//     this.dataService.getOriginals().subscribe(
//       res => {
//         this.originalsMovies = this.modifyData(res);
//       }, err => {
//         console.log("Failed to fetch originals.", err);
//       }
//     )
//   }

//   // check the backdrop_path for movie (i.e the image souce path), if it doesnt exist initialize it with poster path
//   modifyData(movies: Movie) : Movie{
//     if(movies.results){
//       movies.results.forEach(element =>{
//         element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key='+DataService.api_key;
//         element.poster_path = 'https://image.tmdb.org/t/p/original'+element.poster_path+'?api_key='+DataService.api_key;

//         if(!element.title){
//           element.title = element?.name;
//         }
//       })
//     }
//     return movies;
//   }

}

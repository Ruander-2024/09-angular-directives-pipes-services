import { Injectable } from '@angular/core';
import { PeppaModel } from '../interface/peppa.model';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  
  allChars: Array<PeppaModel> = [
  {
    name: 'Peppa Pig',
    sex: 'female',
    imgUrl:
      'https://i5.walmartimages.com/asr/40c4baef-703b-4d2a-8d3d-4e251453950d_1.2e9513fbb59279d2f86d8b9c85863e35.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
  },
  {
    name: 'Daddy Pig',
    sex: 'male',
    imgUrl:
      'https://wordpress.bigissue.com/wp-content/uploads/2014/08/us-iphone-4-my-daddy-peppa-pig-edition-sticker-colouring-book.jpg',
  },
  {
    name: 'Mummy Pig',
    sex: 'female',
    imgUrl:
      'https://vignette.wikia.nocookie.net/peppapig/images/1/19/Mummy_Pig.png/revision/latest?cb=20181208163034',
  },
  {
    name: 'Georgie Pig',
    sex: 'male',
    imgUrl:
      'https://www.bamboobamboo.com/cdn/shop/articles/PP_George_Blog_276bab42-db8e-4754-80ca-d518aefb87d1_1920x.png?v=1667060850'
  },
  {
    name: 'Suzy Sheep',
    sex: 'female',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41L9FG9dB7L._SY450_.jpg',
  },
  {
    name: 'Danny Dog',
    sex: 'male',
    imgUrl:
      'https://static.wikia.nocookie.net/peppapig/images/1/1f/DannyDog.png/revision/latest?cb=20240414055420'
  },
  {
    name: 'Zoe Zebra',
    sex: 'female',
    imgUrl:
      'https://peppapigworld.co.uk/cdn/shop/files/zoe-zebra.png?v=1705660723&width=520',
  },
  {
    name: 'Pedro Pony',
    sex: 'male',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41HahXdyxCL._SX425_.jpg',
  },
];


// getPeppaGirls(): Array<PeppaModel>{
  //   return this.allChars.filter((peppa) => peppa.sex === 'female');
  // }

  // getPeppaBoys(): Array<PeppaModel>{
  //   return this.allChars.filter((peppa) => peppa.sex === 'male');
  // }

  // getAllPeppas(): Array<PeppaModel>{
  //   return this.allChars;
  // }
  // }

  //* Observable

  obsPigs$: Observable<PeppaModel[]> = of(this.allChars);

getPeppaPigs(): Observable<PeppaModel[]>{
  return this.obsPigs$;
}

getPeppaGirls(): Observable<PeppaModel[]> {
  return this.obsPigs$.pipe(
    map((pigs: PeppaModel[]) => {
      return pigs.filter((pig) => pig.sex === 'female');
    })
  );
}

getPeppaBoys(): Observable<PeppaModel[]> {
  return this.obsPigs$.pipe(
    map((pigs: PeppaModel[]) => {
      return pigs.filter((pig) => pig.sex === 'male');
    })
  );
}
}
import { Component } from '@angular/core';

interface PeppaInterface {
  name: string,
  sex: string,
  imgUrl: string
}

@Component({
  selector: 'app-directives-and-pipes',
  templateUrl: './directives-and-pipes.component.html',
  styleUrls: ['./directives-and-pipes.component.scss']
})
export class DirectivesAndPipesComponent {

  allCharacters: Array<PeppaInterface> = [
    {
      name: 'Peppa Pig',
      sex: 'female',
      imgUrl: 'https://i5.walmartimages.com/asr/40c4baef-703b-4d2a-8d3d-4e251453950d_1.2e9513fbb59279d2f86d8b9c85863e35.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
    },
    {
      name: 'Daddy Pig',
      sex: 'male',
      imgUrl: 'https://wordpress.bigissue.com/wp-content/uploads/2014/08/us-iphone-4-my-daddy-peppa-pig-edition-sticker-colouring-book.jpg'
    },
    {
      name: 'Mummy Pig',
      sex: 'female',
      imgUrl: 'https://vignette.wikia.nocookie.net/peppapig/images/1/19/Mummy_Pig.png/revision/latest?cb=20181208163034'
    },
    {
      name: 'Georgie Pig',
      sex: 'male',
      imgUrl: 'https://www.bamboobamboo.com/cdn/shop/articles/PP_George_Blog_276bab42-db8e-4754-80ca-d518aefb87d1_1920x.png?v=1667060850'
    },
    {
      name: 'Suzy Sheep',
      sex: 'female',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41L9FG9dB7L._SY450_.jpg'
    },
    {
      name: 'Danny Dog',
      sex: 'male',
      imgUrl: 'https://www.partyrama.co.uk/wp-content/uploads/2014/02/peppa-pig-danny-dog-lifesize-cardboard-cutout-78cms-product-image.jpg'
    },
    {
      name: 'Zoe Zebra',
      sex: 'female',
      imgUrl: 'https://peppapigworld.co.uk/cdn/shop/files/zoe-zebra.png?v=1705660723&width=520'
    },
    {
      name: 'Pedro Pony',
      sex: 'male',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41HahXdyxCL._SX425_.jpg'
    },
  ];


  toDisplay: string = '';
  cardStyle: string = '';
  btnStyle: string = '';
  characters: Array<PeppaInterface> = [];
  

  showBoysOnly(): void {
    this.characters = this.allCharacters.filter((pig) => pig.sex === 'male');
    this.cardStyle = 'boy-border';
    this.btnStyle = 'boy';
  }

  showGirlsOnly(): void {
    this.characters = this.allCharacters.filter((pig) => pig.sex === 'female');
    this.cardStyle = 'girl-border';
    this.btnStyle = 'girl';
  }

  showEveryone(): void {
    this.characters = this.allCharacters;
    this.cardStyle = 'card-border';
    this.btnStyle = 'everyone';
  }
}

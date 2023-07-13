// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();
const cors=require("cors")

async function bootstrap() {
  {
    const app = await NestFactory.create(AppModule);
    app.use(cors({origin:"http://localhost:3000/",
    methods:["GET","POST","PUT","DELETE"]}))
    const config = new DocumentBuilder()
      .setTitle('Operation')
      .setDescription('The crud API description')
      .setVersion('1.0')
      .addTag('crud')
      .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
  
    await app.listen(3000);
    //const openSearchService = app.get(OpenSearchService);

  //   try {
  //     // Create the index
  //     //const result = await openSearchService.createIndex();
  //     //console.log(result);
  //   } catch (error) {
  //     console.error('Failed to create index:', error);
  //   }
  
  //   await app.close();
  // }
  }
}
bootstrap();

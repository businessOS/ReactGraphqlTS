  
import { Migration } from "@mikro-orm/migrations";

export class Migration20200808202509 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "post" ("_id" serial primary key text, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);'
    );
  }
}
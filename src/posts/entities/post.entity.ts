import { Column, Entity } from "typeorm";

@Entity("posts", { schema: "public" })
export class Post {
    @Column("bigint", { primary: true, name: "id" })
    id: bigint;

    @Column("varchar")
    title: string;
    
    @Column("varchar")
    content: string;
}

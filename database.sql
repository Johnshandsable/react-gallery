CREATE TABLE "gallery_items" 
("id" SERIAL PRIMARY KEY, 
 "path" VARCHAR(1024) NOT NULL, 
 "description" VARCHAR(1024) NOT NULL,
 "show_desc" BOOLEAN DEFAULT FALSE, 
 "likes" INT DEFAULT 0);

INSERT INTO "gallery_items" 
("path", "description", "likes") 
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 1),
       ('images/giraffe.jpg', 'Photo of an awesome giraffe', 0), 
       ('images/otter.jpg', 'Photo of an awesome otter', 1),
       ('images/zebra.jpg', 'Photo of an awesome zebra', 0);
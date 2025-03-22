
let books = {
    fantasy: [
        {
          title: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
          genre: "Fantasy",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 223,
          publicationYear: 1997,
          averageReview: 4.47,
          numberOfReviews: 10832743,
          description: "An orphaned boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, embarking on magical adventures."
        },
        {
          title: "Harry Potter and the Goblet of Fire",
          author: "J.K. Rowling",
          genre: "Fantasy",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 636,
          publicationYear: 2000,
          averageReview: 4.56,
          numberOfReviews: 3983095,
          description: "Harry competes in the dangerous Triwizard Tournament while facing the resurgence of the dark wizard Voldemort."
        },
        {
          title: "The Last Wish",
          author: "Andrzej Sapkowski",
          genre: "Fantasy",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 360,
          publicationYear: 1993,
          averageReview: 4.14,
          numberOfReviews: 387469,
          description: "A collection of short stories introducing Geralt of Rivia, a monster hunter navigating a world of magic and beasts."
        },
        {
          title: "Blood of Elves",
          author: "Andrzej Sapkowski",
          genre: "Fantasy",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 320,
          publicationYear: 1994,
          averageReview: 4.10,
          numberOfReviews: 228339,
          description: "Geralt of Rivia protects Ciri, a princess with extraordinary powers, amidst political intrigue and looming war."
        },
        {
          title: "The Gunslinger",
          author: "Stephen King",
          genre: "Fantasy",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 224,
          publicationYear: 1982,
          averageReview: 3.98,
          numberOfReviews: 345678,
          description: "Roland, the last gunslinger, pursues the enigmatic Man in Black across a desolate world in this dark fantasy tale."
        },
        {
          title: "The Eyes of the Dragon",
          author: "Stephen King",
          genre: "Fantasy",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 384,
          publicationYear: 1984,
          averageReview: 4.05,
          numberOfReviews: 234567,
          description: "A classic tale of dragons, princes, and evil wizards, focusing on a kingdom's struggle against a malevolent sorcerer."
        },
        {
          title: "A Game of Thrones",
          author: "George R.R. Martin",
          genre: "Fantasy",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 694,
          publicationYear: 1996,
          averageReview: 4.45,
          numberOfReviews: 912345,
          description: "Noble families vie for control of the Iron Throne in a land where seasons last for years and political intrigue reigns."
        },
        {
          title: "The Name of the Wind",
          author: "Patrick Rothfuss",
          genre: "Fantasy",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 662,
          publicationYear: 2007,
          averageReview: 4.52,
          numberOfReviews: 678901,
          description: "The autobiography of Kvothe, a legendary figure known for his music, magic, and the mysteries surrounding his life."
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          genre: "Fantasy",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 1007,
          publicationYear: 2010,
          averageReview: 4.65,
          numberOfReviews: 456789,
          description: "In a world of storms and wars, several characters' paths converge as they uncover the secrets of the ancient Knights Radiant."
        },
        {
          title: "Mistborn: The Final Empire",
          author: "Brandon Sanderson",
          genre: "Fantasy",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 541,
          publicationYear: 2006,
          averageReview: 4.44,
          numberOfReviews: 567890,
          description: "In a dystopian world ruled by the immortal Lord Ruler, a group of rebels with magical abilities plot to overthrow the empire."
        }
      ],
      mystery: [
        {
          title: "The Girl with the Dragon Tattoo",
          author: "Stieg Larsson",
          genre: "Mystery, Thriller",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 465,
          publicationYear: 2005,
          averageReview: 4.14,
          numberOfReviews: 2_345_678,
          description: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate the decades-old disappearance of a wealthy industrialist's niece, uncovering dark family secrets and corruption."
        },
        {
          title: "Gone Girl",
          author: "Gillian Flynn",
          genre: "Mystery, Thriller",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 422,
          publicationYear: 2012,
          averageReview: 4.10,
          numberOfReviews: 3_456_789,
          description: "On their fifth wedding anniversary, Amy Dunne goes missing, and her husband Nick becomes the prime suspect. The novel explores the complexities of marriage and media sensationalism."
        },
        {
          title: "In the Woods",
          author: "Tana French",
          genre: "Mystery, Psychological Thriller",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 429,
          publicationYear: 2007,
          averageReview: 3.93,
          numberOfReviews: 1_234_567,
          description: "Detectives Rob Ryan and Cassie Maddox investigate the murder of a young girl in a small Irish town, a case eerily similar to a traumatic event from Rob's childhood."
        },
        {
          title: "The Curious Incident of the Dog in the Night-Time",
          author: "Mark Haddon",
          genre: "Mystery, Contemporary",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 226,
          publicationYear: 2003,
          averageReview: 3.88,
          numberOfReviews: 987_654,
          description: "Fifteen-year-old Christopher Boone, who has an autism spectrum condition, investigates the death of a neighbor's dog, leading him on a journey of self-discovery."
        },
        {
          title: "And Then There Were None",
          author: "Agatha Christie",
          genre: "Mystery, Crime",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 272,
          publicationYear: 1939,
          averageReview: 4.27,
          numberOfReviews: 2_789_012,
          description: "Ten individuals are invited to a secluded island under different pretexts, only to find themselves accused of past crimes and systematically eliminated."
        }
      ],
       biography : [
        {
          title: "Steve Jobs",
          author: "Walter Isaacson",
          genre: "Biography",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 656,
          publicationYear: 2011,
          averageReview: 4.15,
          numberOfReviews: 1_296_683,
          description: "An in-depth biography of Steve Jobs, co-founder of Apple Inc., exploring his life, career, and the innovative products he helped create."
        },
        {
          title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
          author: "Ashlee Vance",
          genre: "Biography",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 400,
          publicationYear: 2015,
          averageReview: 4.23,
          numberOfReviews: 201_345,
          description: "A look into the life of Elon Musk, detailing his journey from a challenging upbringing to leading companies like Tesla and SpaceX."
        },
        {
          title: "iWoz: Computer Geek to Cult Icon",
          author: "Steve Wozniak",
          genre: "Autobiography",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 313,
          publicationYear: 2006,
          averageReview: 3.84,
          numberOfReviews: 17_182,
          description: "An autobiography by Steve Wozniak, co-founder of Apple Inc., discussing his role in the personal computer revolution."
        },
        {
          title: "Hard Drive: Bill Gates and the Making of the Microsoft Empire",
          author: "James Wallace",
          genre: "Biography",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 426,
          publicationYear: 1992,
          averageReview: 4.12,
          numberOfReviews: 1_933,
          description: "A detailed account of Bill Gates' journey in building Microsoft into a software powerhouse."
        },
        {
          title: "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
          author: "Walter Isaacson",
          genre: "History, Biography",
          bookFormat: ["Paperback", "Hardcover", "Ebook"],
          pageCount: 560,
          publicationYear: 2014,
          averageReview: 4.06,
          numberOfReviews: 27_891,
          description: "A collective biography of the pioneers who played significant roles in the creation of the digital age."
        }
      ],
      
};



export  default  books 
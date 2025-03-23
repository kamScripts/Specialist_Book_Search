
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
          description: "Harry competes in the dangerous wizard Tournament while facing the resurgence of the dark wizard Voldemort."
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
          description: "Noble families fight for control of the Iron Throne in a land where seasons last for years and political intrigue reigns."
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
      fiction: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 281,
            publicationYear: 1960,
            averageReview: 4.28,
            numberOfReviews: 5000000,
            description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice."
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 180,
            publicationYear: 1925,
            averageReview: 3.93,
            numberOfReviews: 4000000,
            description: "A portrait of the Roaring Twenties and a critique of the American Dream."
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 328,
            publicationYear: 1949,
            averageReview: 4.19,
            numberOfReviews: 6000000,
            description: "A dystopian novel set in a totalitarian society under constant surveillance."
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 279,
            publicationYear: 1813,
            averageReview: 4.26,
            numberOfReviews: 3500000,
            description: "A romantic comedy about manners, marriage, and morality in 19th century England."
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 214,
            publicationYear: 1951,
            averageReview: 3.80,
            numberOfReviews: 3000000,
            description: "A story about teenage alienation and rebellion, told through the eyes of Holden Caulfield."
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 268,
            publicationYear: 1932,
            averageReview: 3.99,
            numberOfReviews: 5000000,
            description: "A visionary dystopian novel exploring the dangers of technological and genetic control."
        },
        {
            title: "The Book Thief",
            author: "Markus Zusak",
            genre: "Fiction",
            bookFormat: ["Hardcover", "Paperback", "Ebook"],
            pageCount: 552,
            publicationYear: 2005,
            averageReview: 4.37,
            numberOfReviews: 6500000,
            description: "The story of a young girl living in Nazi Germany, narrated by Death."
        }
    ],
  'non fiction': [
      {
          title: "Sapiens: A Brief History of Humankind",
          author: "Yuval Noah Harari",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 443,
          publicationYear: 2011,
          averageReview: 4.45,
          numberOfReviews: 8000000,
          description: "An exploration of the history of humanity, from the Stone Age to the 21st century."
      },
      {
          title: "Educated",
          author: "Tara Westover",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 334,
          publicationYear: 2018,
          averageReview: 4.47,
          numberOfReviews: 1000000,
          description: "A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education."
      },
      {
          title: "Becoming",
          author: "Michelle Obama",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 448,
          publicationYear: 2018,
          averageReview: 4.55,
          numberOfReviews: 2000000,
          description: "A deeply personal memoir by the former First Lady of the United States."
      },
      {
          title: "The Immortal Life of Henrietta Lacks",
          author: "Rebecca Skloot",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 381,
          publicationYear: 2010,
          averageReview: 4.06,
          numberOfReviews: 450000,
          description: "The story of a woman whose cells were used without her knowledge to create the first immortal human cell line."
      },
      {
          title: "Outliers: The Story of Success",
          author: "Malcolm Gladwell",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 309,
          publicationYear: 2008,
          averageReview: 4.16,
          numberOfReviews: 600000,
          description: "An examination of the factors that contribute to high levels of success."
      },
      {
          title: "Born a Crime: Stories from a South African Childhood",
          author: "Trevor Noah",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 304,
          publicationYear: 2016,
          averageReview: 4.46,
          numberOfReviews: 400000,
          description: "A memoir about growing up in apartheid-era South Africa as the mixed-race child of a black mother and a white father."
      },
      {
          title: "The Wright Brothers",
          author: "David McCullough",
          genre: "Non-Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 320,
          publicationYear: 2015,
          averageReview: 4.21,
          numberOfReviews: 300000,
          description: "The story of Wilbur and Orville Wright and their journey to invent the airplane."
      }
  ],
  'science fiction': [
      {
          title: "Dune",
          author: "Frank Herbert",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 412,
          publicationYear: 1965,
          averageReview: 4.23,
          numberOfReviews: 1000000,
          description: "A science fiction epic set on the desert planet Arrakis, dealing with politics, religion, and ecology."
      },
      {
          title: "The Martian",
          author: "Andy Weir",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 369,
          publicationYear: 2014,
          averageReview: 4.40,
          numberOfReviews: 800000,
          description: "A stranded astronaut must survive on Mars using his ingenuity and engineering skills."
      },
      {
          title: "Ender's Game",
          author: "Orson Scott Card",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 324,
          publicationYear: 1985,
          averageReview: 4.30,
          numberOfReviews: 900000,
          description: "A young boy is trained to become a military leader in a war against an alien race."
      },
      {
          title: "Foundation",
          author: "Isaac Asimov",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 255,
          publicationYear: 1951,
          averageReview: 4.15,
          numberOfReviews: 700000,
          description: "A mathematician develops a theory of predicting the future and works to save civilization from collapse."
      },
      {
          title: "Neuromancer",
          author: "William Gibson",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 271,
          publicationYear: 1984,
          averageReview: 3.90,
          numberOfReviews: 600000,
          description: "A cyberpunk novel that explores artificial intelligence, virtual reality, and cyberspace."
      },
      {
          title: "Snow Crash",
          author: "Neal Stephenson",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 480,
          publicationYear: 1992,
          averageReview: 4.03,
          numberOfReviews: 500000,
          description: "A fast-paced cyberpunk adventure set in a dystopian future dominated by virtual reality."
      },
      {
          title: "The Left Hand of Darkness",
          author: "Ursula K. Le Guin",
          genre: "Science Fiction",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 304,
          publicationYear: 1969,
          averageReview: 4.16,
          numberOfReviews: 400000,
          description: "A diplomat is sent to a planet where the inhabitants can change their gender, exploring themes of gender and society."
      }
  ],
  romance: [
      {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          genre: "Romance",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 279,
          publicationYear: 1813,
          averageReview: 4.26,
          numberOfReviews: 3500000,
          description: "A romantic comedy about manners, marriage, and morality in 19th century England."
      },
      {
          title: "Outlander",
          author: "Diana Gabaldon",
          genre: "Romance",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 850,
          publicationYear: 1991,
          averageReview: 4.23,
          numberOfReviews: 700000,
          description: "A historical romance that blends time travel, adventure, and passionate love."
      },
      {
          title: "The Notebook",
          author: "Nicholas Sparks",
          genre: "Romance",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 214,
          publicationYear: 1996,
          averageReview: 4.12,
          numberOfReviews: 800000,
          description: "A timeless love story about two young lovers separated by war and class differences."
      },
      {
          title: "Jane Eyre",
          author: "Charlotte Brontë",
          genre: "Romance",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 500,
          publicationYear: 1847,
          averageReview: 4.12,
          numberOfReviews: 1200000,
          description: "A classic tale of love, mystery, and self-discovery."
      },
      {
          title: "Me Before You",
          author: "Jojo Moyes",
          genre: "Romance",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 369,
          publicationYear: 2012,
          averageReview: 4.26,
          numberOfReviews: 1500000,
          description: "A poignant romance between a young woman and a recently-paralyzed man."
      },
      {
          title: "The Time Traveler's Wife",
          author: "Audrey Niffenegger",
          genre: "Romance",
          bookFormat: ["Hardcover", "Paperback", "Ebook"],
          pageCount: 546,
          publicationYear: 2003,
          averageReview: 3.97,
          numberOfReviews: 900000,
          description: "A love story about a man with a genetic disorder that causes him to time travel unpredictably."
      }]  
      
};



export  default  books 
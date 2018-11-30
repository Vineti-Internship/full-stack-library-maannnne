class AuthorSerializer < ActiveModel::Serializer
  has_many :books
  attributes :id, :fullName, :age, :books, :books_count, :last_book_title

  def books_count
    object.books.length
  end

  def last_book_title
    object&.books&.last&.title
  end

end 

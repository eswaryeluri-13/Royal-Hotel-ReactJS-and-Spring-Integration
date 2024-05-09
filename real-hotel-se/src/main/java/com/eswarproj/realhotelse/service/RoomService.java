package com.eswarproj.realhotelse.service;
import com.eswarproj.realhotelse.exception.InternalServerException;
import com.eswarproj.realhotelse.exception.ResourceNotFoundException;
import com.eswarproj.realhotelse.model.Room;
import com.eswarproj.realhotelse.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
//import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List; // Add this import statement
import java.util.Optional;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class RoomService implements IRoomService {

    private final RoomRepository roomRepository;
    @Override
    public Room addNewRoom(MultipartFile file, String roomType, BigDecimal roomPrice) throws SQLException, IOException {
        Room room = new Room();
        room.setRoomType(roomType);
        room.setRoomPrice(roomPrice);
        if (!file.isEmpty())
        {
            byte[] photoBytes= file.getBytes();
            Blob photoBlob = new SerialBlob(photoBytes);
            room.setPhoto(photoBlob);

        }
        return roomRepository.save(room);
    }

    @Override
    public List<String> getAllRoomTypes() {
        return roomRepository.findDistinctRoomTypes();
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // Define a logger for your class
    private static final Logger logger = Logger.getLogger(RoomService.class.getName());
    @Override
    public byte[] getRoomPhotoByRoomId(Long roomId) {
        try {
            Optional<Room> theRoom = roomRepository.findById(roomId);
            if (theRoom.isEmpty()) {
                throw new ResourceNotFoundException("Sorry Room not found!");
            }
            Blob photoBlob = theRoom.get().getPhoto();
            if (photoBlob != null) {
                return photoBlob.getBytes(1, (int) photoBlob.length());
            }
        } catch (SQLException e) {
            logger.severe("An error occurred while fetching room photo: " + e.getMessage());
            // You might return a default photo or re-throw a runtime exception here
        }
        return null;
    }

    @Override
    public void deleteRoom(Long roomId) {
        Optional<Room> theRoom = roomRepository.findById(roomId);
        if (theRoom.isPresent()) {
            roomRepository.deleteById(roomId);
        }
    }

    @Override
    public Room updateRoom(Long roomId, String roomType, BigDecimal roomPrice, byte[] photoBytes) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found"));
        if (roomType != null) {
            room.setRoomType(roomType);
        }
        if(roomPrice != null){
            room.setRoomPrice(roomPrice);
        }

        if(photoBytes != null && photoBytes.length >0)
        {
            try{
                room.setPhoto(new SerialBlob(photoBytes));
            }catch (SQLException ex){
                throw new InternalServerException("Error updating room");
            }
        }
        return roomRepository.save(room);
    }

    @Override
    public Optional<Room> getRoomById(Long roomId) {
        return Optional.of(roomRepository.findById(roomId).get());
    }

    @Override
    public List<Room> getAvailableRooms(LocalDate checkInDate, LocalDate checkOutDate, String roomType) {
        return roomRepository.findAvailableRoomsByDatesAndType(checkInDate,checkOutDate,roomType);
    }
}

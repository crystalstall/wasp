package util

import (
	"encoding"
	"encoding/binary"
	"errors"
	"fmt"
	"io"
	"math"

	"github.com/iotaledger/hive.go/serializer/v2/marshalutil"
)

//////////////////// basic size-checked read/write \\\\\\\\\\\\\\\\\\\\

func ReadN(r io.Reader, data []byte) error {
	n, err := r.Read(data)
	if err != nil {
		return err
	}
	if n != len(data) {
		return errors.New("incomplete read")
	}
	return nil
}

func WriteN(w io.Writer, data []byte) error {
	n, err := w.Write(data)
	if err != nil {
		return err
	}
	if n != len(data) {
		return errors.New("incomplete write")
	}
	return nil
}

//////////////////// byte \\\\\\\\\\\\\\\\\\\\

func ReadByte(r io.Reader) (byte, error) {
	var b [1]byte
	err := ReadN(r, b[:])
	if err != nil {
		return 0, err
	}
	return b[0], nil
}

func WriteByte(w io.Writer, val byte) error {
	b := []byte{val}
	err := WriteN(w, b)
	return err
}

//////////////////// uint8 \\\\\\\\\\\\\\\\\\\\

func Uint8To1Bytes(val uint8) []byte {
	return []byte{val}
}

func Uint8From1Bytes(b []byte) (uint8, error) {
	if len(b) != 1 {
		return 0, errors.New("len(b) != 1")
	}
	return b[0], nil
}

func MustUint8From1Bytes(b []byte) uint8 {
	ret, err := Uint8From1Bytes(b)
	if err != nil {
		panic(err)
	}
	return ret
}

func ReadUint8(r io.Reader, pval *uint8) error {
	var tmp2 [1]byte
	err := ReadN(r, tmp2[:])
	if err != nil {
		return err
	}
	*pval = tmp2[0]
	return nil
}

func WriteUint8(w io.Writer, val uint8) error {
	err := WriteN(w, Uint8To1Bytes(val))
	return err
}

//////////////////// uint16 \\\\\\\\\\\\\\\\\\\\

func Uint16To2Bytes(val uint16) []byte {
	var tmp2 [2]byte
	binary.LittleEndian.PutUint16(tmp2[:], val)
	return tmp2[:]
}

func Uint16From2Bytes(b []byte) (uint16, error) {
	if len(b) != 2 {
		return 0, errors.New("len(b) != 2")
	}
	return binary.LittleEndian.Uint16(b), nil
}

func MustUint16From2Bytes(b []byte) uint16 {
	ret, err := Uint16From2Bytes(b)
	if err != nil {
		panic(err)
	}
	return ret
}

func ReadUint16(r io.Reader, pval *uint16) error {
	var tmp2 [2]byte
	err := ReadN(r, tmp2[:])
	if err != nil {
		return err
	}
	*pval = binary.LittleEndian.Uint16(tmp2[:])
	return nil
}

func WriteUint16(w io.Writer, val uint16) error {
	err := WriteN(w, Uint16To2Bytes(val))
	return err
}

//////////////////// int32 \\\\\\\\\\\\\\\\\\\\

func Int32To4Bytes(val int32) []byte {
	return Uint32To4Bytes(uint32(val))
}

func ReadInt32(r io.Reader, pval *int32) error {
	var tmp4 [4]byte
	err := ReadN(r, tmp4[:])
	if err != nil {
		return err
	}
	*pval = int32(binary.LittleEndian.Uint32(tmp4[:]))
	return nil
}

//////////////////// uint32 \\\\\\\\\\\\\\\\\\\\

func Uint32To4Bytes(val uint32) []byte {
	var tmp4 [4]byte
	binary.LittleEndian.PutUint32(tmp4[:], val)
	return tmp4[:]
}

func Uint32From4Bytes(b []byte) (uint32, error) {
	if len(b) != 4 {
		return 0, errors.New("len(b) != 4")
	}
	return binary.LittleEndian.Uint32(b), nil
}

func MustUint32From4Bytes(b []byte) uint32 {
	ret, err := Uint32From4Bytes(b)
	if err != nil {
		panic(err)
	}
	return ret
}

func ReadUint32(r io.Reader, pval *uint32) error {
	var tmp4 [4]byte
	err := ReadN(r, tmp4[:])
	if err != nil {
		return err
	}
	*pval = MustUint32From4Bytes(tmp4[:])
	return nil
}

func WriteUint32(w io.Writer, val uint32) error {
	err := WriteN(w, Uint32To4Bytes(val))
	return err
}

//////////////////// int64 \\\\\\\\\\\\\\\\\\\\

func Int64To8Bytes(val int64) []byte {
	return Uint64To8Bytes(uint64(val))
}

func Int64From8Bytes(b []byte) (int64, error) {
	ret, err := Uint64From8Bytes(b)
	return int64(ret), err
}

func ReadInt64(r io.Reader, pval *int64) error {
	var tmp8 [8]byte
	err := ReadN(r, tmp8[:])
	if err != nil {
		return err
	}
	*pval = int64(binary.LittleEndian.Uint64(tmp8[:]))
	return nil
}

func WriteInt64(w io.Writer, val int64) error {
	err := WriteN(w, Uint64To8Bytes(uint64(val)))
	return err
}

//////////////////// uint64 \\\\\\\\\\\\\\\\\\\\

func Uint64To8Bytes(val uint64) []byte {
	var tmp8 [8]byte
	binary.LittleEndian.PutUint64(tmp8[:], val)
	return tmp8[:]
}

func Uint64From8Bytes(b []byte) (uint64, error) {
	if len(b) != 8 {
		return 0, errors.New("len(b) != 8")
	}
	return binary.LittleEndian.Uint64(b), nil
}

func MustUint64From8Bytes(b []byte) uint64 {
	ret, err := Uint64From8Bytes(b)
	if err != nil {
		panic(err)
	}
	return ret
}

func ReadUint64(r io.Reader, pval *uint64) error {
	var tmp8 [8]byte
	err := ReadN(r, tmp8[:])
	if err != nil {
		return err
	}
	*pval = binary.LittleEndian.Uint64(tmp8[:])
	return nil
}

func WriteUint64(w io.Writer, val uint64) error {
	err := WriteN(w, Uint64To8Bytes(val))
	return err
}

//////////////////// bytes, uint16 length \\\\\\\\\\\\\\\\\\\\

func ReadBytes8(r io.Reader) ([]byte, error) {
	var length uint8
	length, err := ReadByte(r)
	if err != nil {
		return nil, err
	}
	if length == 0 {
		return []byte{}, nil
	}
	ret := make([]byte, length)
	err = ReadN(r, ret)
	if err != nil {
		return nil, err
	}
	return ret, nil
}

func WriteBytes8(w io.Writer, data []byte) error {
	if len(data) > 256 {
		panic(fmt.Sprintf("WriteBytes8: too long data (%d)", len(data)))
	}
	err := WriteByte(w, byte(len(data)))
	if err != nil {
		return err
	}
	if len(data) != 0 {
		err = WriteN(w, data)
	}
	return err
}

//////////////////// bytes, uint16 length \\\\\\\\\\\\\\\\\\\\

func ReadBytes16(r io.Reader) ([]byte, error) {
	var length uint16
	err := ReadUint16(r, &length)
	if err != nil {
		return nil, err
	}
	if length == 0 {
		return []byte{}, nil
	}
	ret := make([]byte, length)
	err = ReadN(r, ret)
	if err != nil {
		return nil, err
	}
	return ret, nil
}

func WriteBytes16(w io.Writer, data []byte) error {
	if len(data) > math.MaxUint16 {
		panic(fmt.Sprintf("WriteBytes16: too long data (%v)", len(data)))
	}
	err := WriteUint16(w, uint16(len(data)))
	if err != nil {
		return err
	}
	if len(data) != 0 {
		err = WriteN(w, data)
	}
	return err
}

//////////////////// bytes, uint32 length \\\\\\\\\\\\\\\\\\\\

func ReadBytes32(r io.Reader) ([]byte, error) {
	var length uint32
	err := ReadUint32(r, &length)
	if err != nil {
		return nil, err
	}
	if length == 0 {
		return []byte{}, nil
	}
	ret := make([]byte, length)
	err = ReadN(r, ret)
	if err != nil {
		return nil, err
	}
	return ret, nil
}

func WriteBytes32(w io.Writer, data []byte) error {
	if len(data) > math.MaxUint32 {
		panic(fmt.Sprintf("WriteBytes32: too long data (%v)", len(data)))
	}
	err := WriteUint32(w, uint32(len(data)))
	if err != nil {
		return err
	}
	err = WriteN(w, data)
	return err
}

//////////////////// bool \\\\\\\\\\\\\\\\\\\\

func ReadBoolByte(r io.Reader, cond *bool) error {
	var b [1]byte
	err := ReadN(r, b[:])
	if err != nil {
		return err
	}
	if (b[0] & 0xfe) != 0x00 {
		return errors.New("ReadBoolByte: unexpected value")
	}
	*cond = b[0] == 1
	return nil
}

func WriteBoolByte(w io.Writer, cond bool) error {
	var b [1]byte
	if cond {
		b[0] = 1
	}
	err := WriteN(w, b[:])
	return err
}

//////////////////// Size16, Size32 \\\\\\\\\\\\\\\\\\\\

// use ULEB16 decoding so that WasmLib can use it as well
func BytesToSize16(buf []byte) uint16 {
	b := uint16(buf[0])
	if (b & 0x80) == 0 {
		return b
	}
	ret := b & 0x7f
	b = uint16(buf[1])
	if (b & 0x80) == 0 {
		return ret | (b << 7)
	}
	ret |= (b & 0x7f) << 7
	b = uint16(buf[2])
	if (b & 0xfc) == 0 {
		return ret | (b << 14)
	}
	panic("invalid ULEB16")
}

// use ULEB16 encoding so that WasmLib can decode it as well
func Size16ToBytes(value uint16) []byte {
	if value < 0x80 {
		return []byte{
			byte(value),
		}
	}
	if value < 0x4000 {
		return []byte{
			byte(value | 0x80),
			byte(value >> 7),
		}
	}
	return []byte{
		byte(value | 0x80),
		byte((value >> 7) | 0x80),
		byte(value >> 14),
	}
}

// use ULEB32 decoding so that WasmLib can use it as well
func BytesToSize32(buf []byte) uint32 {
	b := uint32(buf[0])
	if (b & 0x80) == 0 {
		return b
	}
	ret := b & 0x7f
	b = uint32(buf[1])
	if (b & 0x80) == 0 {
		return ret | (b << 7)
	}
	ret |= (b & 0x7f) << 7
	b = uint32(buf[2])
	if (b & 0x80) == 0 {
		return ret | (b << 14)
	}
	ret |= (b & 0x7f) << 14
	b = uint32(buf[3])
	if (b & 0x80) == 0 {
		return ret | (b << 21)
	}
	ret |= (b & 0x7f) << 21
	b = uint32(buf[4])
	if (b & 0xf0) == 0 {
		return ret | (b << 28)
	}
	panic("invalid ULEB32")
}

// use ULEB32 encoding so that WasmLib can decode it as well
func Size32ToBytes(value uint32) []byte {
	if value < 0x80 {
		return []byte{
			byte(value),
		}
	}
	if value < 0x4000 {
		return []byte{
			byte(value | 0x80),
			byte(value >> 7),
		}
	}
	if value < 0x200000 {
		return []byte{
			byte(value | 0x80),
			byte((value >> 7) | 0x80),
			byte(value >> 14),
		}
	}
	if value < 0x10000000 {
		return []byte{
			byte(value | 0x80),
			byte((value >> 7) | 0x80),
			byte((value >> 14) | 0x80),
			byte(value >> 21),
		}
	}
	return []byte{
		byte(value | 0x80),
		byte((value >> 7) | 0x80),
		byte((value >> 14) | 0x80),
		byte((value >> 21) | 0x80),
		byte(value >> 28),
	}
}

//////////////////// string, uint16 length \\\\\\\\\\\\\\\\\\\\

func StringToBytes(str string) []byte {
	buf := Uint16To2Bytes(uint16(len(str)))
	return append(buf, str...)
}

func ReadString16(r io.Reader) (string, error) {
	ret, err := ReadBytes16(r)
	if err != nil {
		return "", err
	}
	return string(ret), err
}

func WriteString16(w io.Writer, str string) error {
	return WriteBytes16(w, []byte(str))
}

//////////////////// marshaled \\\\\\\\\\\\\\\\\\\\

// ReadMarshaled supports kyber.Point, kyber.Scalar and similar.
func ReadMarshaled(r io.Reader, val encoding.BinaryUnmarshaler) error {
	var err error
	var bin []byte
	if bin, err = ReadBytes16(r); err != nil {
		return err
	}
	return val.UnmarshalBinary(bin)
}

// WriteMarshaled supports kyber.Point, kyber.Scalar and similar.
func WriteMarshaled(w io.Writer, val encoding.BinaryMarshaler) error {
	var err error
	var bin []byte
	if bin, err = val.MarshalBinary(); err != nil {
		return err
	}
	return WriteBytes16(w, bin)
}

func WriteBytes8ToMarshalUtil(data []byte, mu *marshalutil.MarshalUtil) {
	if len(data) > 256 {
		panic("WriteBytes8ToMarshalUtil: len(data) > 256")
	}
	mu.WriteUint8(uint8(len(data))).WriteBytes(data)
}

func ReadBytes8FromMarshalUtil(mu *marshalutil.MarshalUtil) ([]byte, error) {
	l, err := mu.ReadUint8()
	if err != nil {
		return nil, err
	}
	ret, err := mu.ReadBytes(int(l))
	if err != nil {
		return nil, err
	}
	return ret, nil
}

func WriteBytes16ToMarshalUtil(data []byte, mu *marshalutil.MarshalUtil) {
	if len(data) > math.MaxUint16 {
		panic("WriteBytes16ToMarshalUtil: len(data) > math.MaxUint16")
	}
	mu.WriteUint16(uint16(len(data))).WriteBytes(data)
}

func ReadBytes16FromMarshalUtil(mu *marshalutil.MarshalUtil) ([]byte, error) {
	l, err := mu.ReadUint16()
	if err != nil {
		return nil, err
	}
	ret, err := mu.ReadBytes(int(l))
	if err != nil {
		return nil, err
	}
	return ret, nil
}

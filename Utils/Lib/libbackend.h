/* Created by "go tool cgo" - DO NOT EDIT. */

/* package command-line-arguments */


#line 1 "cgo-builtin-prolog"

#include <stddef.h> /* for ptrdiff_t below */

#ifndef GO_CGO_EXPORT_PROLOGUE_H
#define GO_CGO_EXPORT_PROLOGUE_H

typedef struct { const char *p; ptrdiff_t n; } _GoString_;

#endif

/* Start of preamble from import "C" comments.  */




/* End of preamble from import "C" comments.  */


/* Start of boilerplate cgo prologue.  */
#line 1 "cgo-gcc-export-header-prolog"

#ifndef GO_CGO_PROLOGUE_H
#define GO_CGO_PROLOGUE_H

typedef signed char GoInt8;
typedef unsigned char GoUint8;
typedef short GoInt16;
typedef unsigned short GoUint16;
typedef int GoInt32;
typedef unsigned int GoUint32;
typedef long long GoInt64;
typedef unsigned long long GoUint64;
typedef GoInt64 GoInt;
typedef GoUint64 GoUint;
typedef __SIZE_TYPE__ GoUintptr;
typedef float GoFloat32;
typedef double GoFloat64;
typedef float _Complex GoComplex64;
typedef double _Complex GoComplex128;

/*
  static assertion to make sure the file is being used on architecture
  at least with matching size of GoInt.
*/
typedef char _check_for_64_bit_pointer_matching_GoInt[sizeof(void*)==64/8 ? 1:-1];

typedef _GoString_ GoString;
typedef void *GoMap;
typedef void *GoChan;
typedef struct { void *t; void *v; } GoInterface;
typedef struct { void *data; GoInt len; GoInt cap; } GoSlice;

#endif

/* End of boilerplate cgo prologue.  */

#ifdef __cplusplus
extern "C" {
#endif


extern char* CreateUser(char* p0, char* p1, char* p2, char* p3);

extern char* GetUser(GoInt p0);

extern char* GetUserByEmail(char* p0);

extern char* ValidateUser(char* p0, char* p1);

extern char* CreateArticle(GoInt p0, char* p1, char* p2, char* p3, char* p4);

extern char* GetArticle(GoInt p0);

extern char* DeleteArticle(GoInt p0);

extern char* ApproveArticle(GoInt p0);

extern char* UpdateArticleBody(GoInt p0, char* p1);

extern char* GetArticlesFromUser(GoInt p0);

extern char* GetApprovedArticles();

extern char* Get12MostRecentArticles();

extern char* GetArticleAuthor(GoInt p0);

extern char* SaveArticle(GoInt p0, GoInt p1);

extern char* GetSavedArticles(GoInt p0);

extern char* CreateEvent(char* p0, char* p1, char* p2, char* p3);

extern char* GetEvent(GoInt p0);

extern char* GetFutureEvents();

extern void Migrate();

#ifdef __cplusplus
}
#endif

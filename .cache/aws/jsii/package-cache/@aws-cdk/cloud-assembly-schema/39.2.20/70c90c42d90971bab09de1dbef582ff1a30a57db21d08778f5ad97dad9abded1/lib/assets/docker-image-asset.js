"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ja2VyLWltYWdlLWFzc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9ja2VyLWltYWdlLWFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd3NEZXN0aW5hdGlvbiB9IGZyb20gJy4vYXdzLWRlc3RpbmF0aW9uJztcblxuLyoqXG4gKiBBIGZpbGUgYXNzZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb2NrZXJJbWFnZUFzc2V0IHtcbiAgLyoqXG4gICAqIFNvdXJjZSBkZXNjcmlwdGlvbiBmb3IgZmlsZSBhc3NldHNcbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogRG9ja2VySW1hZ2VTb3VyY2U7XG5cbiAgLyoqXG4gICAqIERlc3RpbmF0aW9ucyBmb3IgdGhpcyBmaWxlIGFzc2V0XG4gICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbnM6IHsgW2lkOiBzdHJpbmddOiBEb2NrZXJJbWFnZURlc3RpbmF0aW9uIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgaG93IHRvIHByb2R1Y2UgYSBEb2NrZXIgaW1hZ2UgZnJvbSBhIHNvdXJjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY2tlckltYWdlU291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB0aGUgRG9ja2VyIGltYWdlIGJ1aWxkIGluc3RydWN0aW9ucy5cbiAgICpcbiAgICogVGhpcyBwYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSBhc3NldCBtYW5pZmVzdCBsb2NhdGlvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBFeGFjdGx5IG9uZSBvZiBgZGlyZWN0b3J5YCBhbmQgYGV4ZWN1dGFibGVgIGlzIHJlcXVpcmVkXG4gICAqL1xuICByZWFkb25seSBkaXJlY3Rvcnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgY29tbWFuZC1saW5lIGV4ZWN1dGFibGUgdGhhdCByZXR1cm5zIHRoZSBuYW1lIG9mIGEgbG9jYWxcbiAgICogRG9ja2VyIGltYWdlIG9uIHN0ZG91dCBhZnRlciBiZWluZyBydW4uXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gRXhhY3RseSBvbmUgb2YgYGRpcmVjdG9yeWAgYW5kIGBleGVjdXRhYmxlYCBpcyByZXF1aXJlZFxuICAgKi9cbiAgcmVhZG9ubHkgZXhlY3V0YWJsZT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZSB3aXRoIGJ1aWxkIGluc3RydWN0aW9uc1xuICAgKlxuICAgKiBPbmx5IGFsbG93ZWQgd2hlbiBgZGlyZWN0b3J5YCBpcyBzZXQuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwiRG9ja2VyZmlsZVwiXG4gICAqL1xuICByZWFkb25seSBkb2NrZXJGaWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUYXJnZXQgYnVpbGQgc3RhZ2UgaW4gYSBEb2NrZXJmaWxlIHdpdGggbXVsdGlwbGUgYnVpbGQgc3RhZ2VzXG4gICAqXG4gICAqIE9ubHkgYWxsb3dlZCB3aGVuIGBkaXJlY3RvcnlgIGlzIHNldC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBUaGUgbGFzdCBzdGFnZSBpbiB0aGUgRG9ja2VyZmlsZVxuICAgKi9cbiAgcmVhZG9ubHkgZG9ja2VyQnVpbGRUYXJnZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgYnVpbGQgYXJndW1lbnRzXG4gICAqXG4gICAqIE9ubHkgYWxsb3dlZCB3aGVuIGBkaXJlY3RvcnlgIGlzIHNldC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyBhZGRpdGlvbmFsIGJ1aWxkIGFyZ3VtZW50c1xuICAgKi9cbiAgcmVhZG9ubHkgZG9ja2VyQnVpbGRBcmdzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIFNTSCBhZ2VudCBzb2NrZXQgb3Iga2V5c1xuICAgKlxuICAgKiBSZXF1aXJlcyBidWlsZGluZyB3aXRoIGRvY2tlciBidWlsZGtpdC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyBzc2ggZmxhZyBpcyBzZXRcbiAgICovXG4gIHJlYWRvbmx5IGRvY2tlckJ1aWxkU3NoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGJ1aWxkIHNlY3JldHNcbiAgICpcbiAgICogT25seSBhbGxvd2VkIHdoZW4gYGRpcmVjdG9yeWAgaXMgc2V0LlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIE5vIGFkZGl0aW9uYWwgYnVpbGQgc2VjcmV0c1xuICAgKi9cbiAgcmVhZG9ubHkgZG9ja2VyQnVpbGRTZWNyZXRzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgLyoqXG4gICAqIE5ldHdvcmtpbmcgbW9kZSBmb3IgdGhlIFJVTiBjb21tYW5kcyBkdXJpbmcgYnVpbGQuIF9SZXF1aXJlcyBEb2NrZXIgRW5naW5lIEFQSSB2MS4yNStfLlxuICAgKlxuICAgKiBTcGVjaWZ5IHRoaXMgcHJvcGVydHkgdG8gYnVpbGQgaW1hZ2VzIG9uIGEgc3BlY2lmaWMgbmV0d29ya2luZyBtb2RlLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIG5vIG5ldHdvcmtpbmcgbW9kZSBzcGVjaWZpZWRcbiAgICovXG4gIHJlYWRvbmx5IG5ldHdvcmtNb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQbGF0Zm9ybSB0byBidWlsZCBmb3IuIF9SZXF1aXJlcyBEb2NrZXIgQnVpbGR4Xy5cbiAgICpcbiAgICogU3BlY2lmeSB0aGlzIHByb3BlcnR5IHRvIGJ1aWxkIGltYWdlcyBvbiBhIHNwZWNpZmljIHBsYXRmb3JtL2FyY2hpdGVjdHVyZS5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBjdXJyZW50IG1hY2hpbmUgcGxhdGZvcm1cbiAgICovXG4gIHJlYWRvbmx5IHBsYXRmb3JtPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPdXRwdXRzXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gb3V0cHV0cyBhcmUgcGFzc2VkIHRvIHRoZSBidWlsZCBjb21tYW5kIChkZWZhdWx0IG91dHB1dHMgYXJlIHVzZWQpXG4gICAqIEBzZWUgaHR0cHM6Ly9kb2NzLmRvY2tlci5jb20vZW5naW5lL3JlZmVyZW5jZS9jb21tYW5kbGluZS9idWlsZC8jY3VzdG9tLWJ1aWxkLW91dHB1dHNcbiAgICovXG4gIHJlYWRvbmx5IGRvY2tlck91dHB1dHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ2FjaGUgZnJvbSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGBkb2NrZXIgYnVpbGRgIGNvbW1hbmQuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gbm8gY2FjaGUgZnJvbSBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIGJ1aWxkIGNvbW1hbmRcbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9idWlsZC9jYWNoZS9iYWNrZW5kcy9cbiAgICovXG4gIHJlYWRvbmx5IGNhY2hlRnJvbT86IERvY2tlckNhY2hlT3B0aW9uW107XG5cbiAgLyoqXG4gICAqIENhY2hlIHRvIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgYGRvY2tlciBidWlsZGAgY29tbWFuZC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBubyBjYWNoZSB0byBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIGJ1aWxkIGNvbW1hbmRcbiAgICogQHNlZSBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9idWlsZC9jYWNoZS9iYWNrZW5kcy9cbiAgICovXG4gIHJlYWRvbmx5IGNhY2hlVG8/OiBEb2NrZXJDYWNoZU9wdGlvbjtcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgY2FjaGUgYW5kIHBhc3MgYC0tbm8tY2FjaGVgIHRvIHRoZSBgZG9ja2VyIGJ1aWxkYCBjb21tYW5kLlxuICAgKlxuICAgKiBAZGVmYXVsdCAtIGNhY2hlIGlzIHVzZWRcbiAgICovXG4gIHJlYWRvbmx5IGNhY2hlRGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFdoZXJlIHRvIHB1Ymxpc2ggZG9ja2VyIGltYWdlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY2tlckltYWdlRGVzdGluYXRpb24gZXh0ZW5kcyBBd3NEZXN0aW5hdGlvbiB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBFQ1IgcmVwb3NpdG9yeSB0byBwdWJsaXNoIHRvXG4gICAqL1xuICByZWFkb25seSByZXBvc2l0b3J5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUYWcgb2YgdGhlIGltYWdlIHRvIHB1Ymxpc2hcbiAgICovXG4gIHJlYWRvbmx5IGltYWdlVGFnOiBzdHJpbmc7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIERvY2tlciBjYWNoZSBiYWNrZW5kXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9ja2VyQ2FjaGVPcHRpb24ge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgY2FjaGUgdG8gdXNlLlxuICAgKiBSZWZlciB0byBodHRwczovL2RvY3MuZG9ja2VyLmNvbS9idWlsZC9jYWNoZS9iYWNrZW5kcy8gZm9yIGZ1bGwgbGlzdCBvZiBiYWNrZW5kcy5cbiAgICogQGRlZmF1bHQgLSB1bnNwZWNpZmllZFxuICAgKlxuICAgKiBAZXhhbXBsZSAncmVnaXN0cnknXG4gICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbnkgcGFyYW1ldGVycyB0byBwYXNzIGludG8gdGhlIGRvY2tlciBjYWNoZSBiYWNrZW5kIGNvbmZpZ3VyYXRpb24uXG4gICAqIFJlZmVyIHRvIGh0dHBzOi8vZG9jcy5kb2NrZXIuY29tL2J1aWxkL2NhY2hlL2JhY2tlbmRzLyBmb3IgY2FjaGUgYmFja2VuZCBjb25maWd1cmF0aW9uLlxuICAgKiBAZGVmYXVsdCB7fSBObyBvcHRpb25zIHByb3ZpZGVkXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGRlY2xhcmUgY29uc3QgYnJhbmNoOiBzdHJpbmc7XG4gICAqXG4gICAqIGNvbnN0IHBhcmFtcyA9IHtcbiAgICogICByZWY6IGAxMjM0NTY3OC5ka3IuZWNyLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2NhY2hlOiR7YnJhbmNofWAsXG4gICAqICAgbW9kZTogXCJtYXhcIixcbiAgICogfTtcbiAgICovXG4gIHJlYWRvbmx5IHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG4iXX0=